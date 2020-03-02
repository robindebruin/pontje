import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Harbor } from '../../constants/FerryRoutes';
import FerryTimes from '../FerryTimes';
import { FerryTime, DepTimes } from '../../constants/FerryTime.interface';
import Time from '../../utils/time';
import Loading from '../Loading';
import { stripDepartureTimes } from './helpers/stripDepartureTimes';
import { nextDepartureTime, nextDepartureTimeIndex } from './helpers/nextDepartureTime';
import Footer from './../Footer';
import DestinationHeader from '../DestinationHeader';

function fetchJSON(fileName): Promise<FerryTime> {
  // env for deployment on github
  return fetch(`${process.env.PUBLIC_URL}/ferry-times/${fileName}.json`).then(res => res.json());
}

interface Props {
  departurePort: Harbor;
  destinationPort: Harbor;
}

function Destination({ departurePort, destinationPort }: Props) {
  const [depTimes, setDepTimes] = useState<DepTimes>();
  const [currentTime, setCurrentTime] = useState(Time.getTheTime());

  useEffect(() => {
    departurePort.destinations.forEach(dest => {
      Promise.all(dest.lines.map(fn => fetchJSON(fn)))
        .then(ferryTimes =>
          setDepTimes(prev => ({
            ...prev,
            ...{ [`${dest.port.name}`]: stripDepartureTimes(ferryTimes, Time.getDayType()) },
          })),
        )
        .catch(err => console.error(err));
    });
  }, [departurePort]);

  // Run timer every second
  setInterval(() => {
    setCurrentTime(Time.getTheTime());
  }, 1000);

  if (!depTimes)
    return (
      <div className="departure-port departure-port__loading ">
        <Loading />
      </div>
    );

  const isActiveClass = (listName: string): string => listName === destinationPort?.name && 'departure-active';

  return (
    <>
      <DestinationHeader title="Bestemming"></DestinationHeader>

      {departurePort.destinations.map(des => (
        <div className="departure-port" key={des.port.name}>
          <div className={`departure-row-inner-left ${isActiveClass(des.port.name)}`}>
            <Link to={`/${departurePort.url}/${des.port.url}`}>{des.port.name}</Link>
          </div>
          <div className="departure-row-inner-right">{nextDepartureTime(des.port.name, depTimes, currentTime)}</div>
        </div>
      ))}

      <FerryTimes
        depTimes={depTimes[destinationPort?.name]}
        closestTimeIndex={nextDepartureTimeIndex(destinationPort?.name, depTimes, currentTime)}
      />

      <Footer lines={departurePort.destinations.find(des => des.port === destinationPort)?.lines} />
    </>
  );
}
export default Destination;
