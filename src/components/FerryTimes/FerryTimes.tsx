import React from 'react';
import { DepTimes } from '../../constants/FerryTime.interface';
import Time from '../../utils/Time';

interface Props {
  destinationPortName: string;
  depTimes: DepTimes;
  closestTimeIndex: number;
}

function FerryTimes({ destinationPortName = '', depTimes, closestTimeIndex = 0 }) {
  if (!depTimes) {
    return <div className="ferry-times" />;
  }

  return (
    <>
      <div className="ferry-times">
        <div className="ferry-times ferry-times__title">{destinationPortName}</div>

        {depTimes.slice(closestTimeIndex).map(time => (
          <div className="ferry-times ferry-times__time" key={time}>
            <div> {Time.stripSeconds(time)}</div>

            <div className="ferry-times__count-down">
              {Time.HoursMinutes(
                Time.msToHMS(
                  Math.abs((Time.timeToDateObj(time) as any) - (Time.timeToDateObj(Time.getTheTime()) as any)),
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FerryTimes;
