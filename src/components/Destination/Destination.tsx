import React, { useEffect, useState } from 'react';
import { Harbor } from '../../constants/FerryRoutes';
import FerryTimes from '../FerryTimes';
import { FerryTime, DepTimes } from '../../constants/FerryTime.interface';
import Time from '../../utils/Time';
import Loading from '../Loading';
import { stripDepartureTimes, matchingDestinations } from './helpers/stripDepartureTimes';
import { nextDepartureTime, nextDepartureTimeIndex } from './helpers/nextDepartureTime';
import DestinationHeader from './DestinationHeader';
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
    const lines = departurePort?.destinations.flatMap(destination => destination.lines) || [];
    lines.forEach(line => fetchFerryTimes({ url: `/ferry-times/${line}.json` }));
  }, [departurePort, fetchFerryTimes]);

  /* For each ferryTimes strip departure times, and concat matching routes from different lines */
  useEffect(() => {
    let departureTimes: DepTimes;
    departurePort?.destinations.forEach(destination => {
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

  if (!depTimes) return <div className="destination-port destination-port__loading "></div>;

  return (
    <>
      <DestinationHeader title="Bestemming"></DestinationHeader>
      {departurePort.destinations.map(des => (
        // <div key={des.port.name}>
        <>
          <div key={des.port.name} className="destination-port">
            <div className="card ">{departurePort.name}</div>
            <div className="card card--blank"> > </div>
            <div className="card">{des.port.name}</div>
            <div className="card--end">
              <div className="card card--time">
                <span className="card--time__info">gaat over</span>

                <span className="counter">
                  {Time.stripHours(nextDepartureTime(des.port.name, depTimes, currentTime))}
                </span>
                <span className="card--time__info">min</span>
              </div>
            </div>
          </div>
          <div className="line"></div>

          {/* </div> */}
        </>
      ))}
      <div className="times-container">
        {departurePort.destinations.map(des => (
          <FerryTimes
            destinationPortName={des.port.name}
            depTimes={depTimes[des.port.name]}
            closestTimeIndex={nextDepartureTimeIndex(des.port.name, depTimes, currentTime)}
            key={des.port.fullName}
          />
        ))}
      </div>
    </>
  );
}
export default Destination;
