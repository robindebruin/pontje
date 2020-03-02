import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Harbor } from '../../constants/FerryRoutes';
import FerryTimes from '../FerryTimes';
import { FerryTime, DepTimes } from '../../constants/FerryTime.interface';
import Time from '../../utils/time';
import Loading from '../Loading';
import { stripDepartureTimes, matchingDestinations } from './helpers/stripDepartureTimes';
import { nextDepartureTime, nextDepartureTimeIndex } from './helpers/nextDepartureTime';
import Footer from './../Footer';
import DestinationHeader from '../DestinationHeader';
import useHttpClient from '../../hooks/useHttpClient';

interface Props {
  departurePort: Harbor;
  destinationPort: Harbor;
}

function Destination({ departurePort, destinationPort }: Props) {
  const [depTimes, setDepTimes] = useState<DepTimes>();
  const [currentTime, setCurrentTime] = useState<string>(Time.getTheTime());
  const [ferryTime, status, fetchFerryTimes] = useHttpClient<FerryTime>();
  const [ferryTimes, setFerryTimes] = useState<FerryTime[]>([]);

  /* On receive of a departure port fetch all matching ferry times json */
  useEffect(() => {
    setFerryTimes([]);
    const lines = departurePort.destinations.flatMap(destination => destination.lines);
    lines.forEach(line => fetchFerryTimes(`/ferry-times/${line}.json`));
  }, [departurePort, fetchFerryTimes]);

  /* For each ferryTimes strip departure times, and concat matching routes from different lines */
  useEffect(() => {
    let departureTimes: DepTimes;
    departurePort.destinations.forEach(destination => {
      const filterFerryTimes = matchingDestinations(destination, ferryTimes);
      departureTimes = {
        ...departureTimes,
        [destination.port.name]: stripDepartureTimes(filterFerryTimes, Time.getDayType()),
      };
    });

    setDepTimes(departureTimes);
  }, [ferryTimes, departurePort]);

  /* On receive of ferry time object, push in to state ferryTimes array */
  useEffect(() => {
    if (!ferryTime) return;
    setFerryTimes(ferryTimes => [...ferryTimes, ferryTime]);
  }, [ferryTime, setFerryTimes]);

  /* Update every second to trigger re-render */
  setInterval(() => {
    setCurrentTime(Time.getTheTime());
  }, 1000);

  const isActiveClass = (listName: string): string => listName === destinationPort?.name && 'destination-active';

  if (!depTimes)
    return (
      <div className="destination-port destination-port__loading ">
        <Loading />
      </div>
    );

  return (
    <>
      <DestinationHeader title="Bestemming"></DestinationHeader>

      {departurePort.destinations.map(des => (
        <div className="destination-port" key={des.port.name}>
          <div className={`destination-row-inner-left ${isActiveClass(des.port.name)}`}>
            <Link to={`/${departurePort.url}/${des.port.url}`}>{des.port.name}</Link>
          </div>
          <div className="destination-row-inner-right">
            {Time.stripHours(nextDepartureTime(des.port.name, depTimes, currentTime))}
            {/* {nextDepartureTime(des.port.name, depTimes, currentTime)} */}
            <sup> minuten</sup>
          </div>
        </div>
      ))}

      <FerryTimes
        destinationPortName={destinationPort?.name}
        depTimes={depTimes[destinationPort?.name]}
        closestTimeIndex={nextDepartureTimeIndex(destinationPort?.name, depTimes, currentTime)}
      />
      <Footer lines={departurePort.destinations.find(des => des.port === destinationPort)?.lines} />
    </>
  );
}
export default Destination;
