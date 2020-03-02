import React from 'react';
import { DepTimes } from '../../constants/FerryTime.interface';
import Time from '../../utils/time';

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
    <div className="ferry-times">
      {/* <div className={}>{destinationPortName}</div> */}
      {depTimes.slice(closestTimeIndex).map(time => (
        <div key={time}>{Time.stripSeconds(time)}</div>
      ))}
    </div>
  );
}

export default FerryTimes;
