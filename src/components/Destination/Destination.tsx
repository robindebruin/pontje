import React, { useEffect, useState } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Ports } from '../../constants/FerryRoutes';
import FerryTimes from '../FerryTimes';
import { FerryTime, DepTimes, RouteInfo } from '../../constants/FerryTime.interface';
import Time from '../../utils/time';
import Loading from '../Loading';
import { stripDepartureTimes } from './helpers/stripDepartureTimes';
import { nextDepartureTime, nextDepartureTimeIndex } from './helpers/nextDepartureTime';
import Footer from './../Footer';

function fetchJSON(fileName): Promise<FerryTime> {
  return fetch(`./../ferry-times/${fileName}.json`).then(res => res.json());
}

function Destination(props: RouteComponentProps<RouteInfo>) {
  const [depTimes, setDepTimes] = useState<DepTimes>();
  const [currentTime, setCurrentTime] = useState(Time.getTheTime());

  const { dep, des } = props.match.params;
  const departurePort = Ports.find(p => dep === p.url);
  const destinationPort = Ports.find(p => des === p.url);

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

  if (!depTimes) return <Loading />;

  return (
    <>
      <div>
        {departurePort.destinations.map(des => (
          <div className="departure-port" key={des.port.name}>
            <div className="departure-row-inner-left">
              <Link to={`/${dep}/${des.port.url}`}>{des.port.name}</Link>
            </div>
            <div className="departure-row-inner-right">{nextDepartureTime(des.port.name, depTimes, currentTime)}</div>
          </div>
        ))}
      </div>

      <FerryTimes
        depTimes={depTimes[destinationPort?.name]}
        closestTimeIndex={nextDepartureTimeIndex(destinationPort?.name, depTimes, currentTime)}
      />

      <Footer lines={departurePort.destinations.find(des => des.port === destinationPort)?.lines} />
    </>
  );
}
export default withRouter(Destination);
