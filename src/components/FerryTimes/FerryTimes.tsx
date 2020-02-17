import React from 'react';
import { DepTimes } from '../../constants/FerryTime.interface';

interface Props {
  depTimes: DepTimes;
  destinationPortName: string;
  closestTimeIndex: number;
}

function FerryTimes({ depTimes, closestTimeIndex = 0 }) {
  if (!depTimes) {
    return <></>;
  }

  return (
    <div className="ferry-times">
      {depTimes.map(time => (
        <div key={time}>{time}</div>
      ))}
    </div>
  );
}

export default FerryTimes;
