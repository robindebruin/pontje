import React from 'react';
import { Link } from 'react-router-dom';
import { Ports, Harbor } from '../../constants/FerryRoutes';
import DepartureHeader from '../DepartureHeader';

interface Props {
  departurePort: Harbor;
}

function Departure({ departurePort }: Props) {
  const isActiveClass = (listName: string): string => listName === departurePort?.name && 'departure-active';

  return (
    <>
      <DepartureHeader title="Vertrek"></DepartureHeader>
      <div className={`departure`}>
        {Ports.map(port => (
          <div key={port.name} className={`departure-link ${isActiveClass(port.name)}`}>
            <Link to={`/${port.url}`}>{port.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Departure;
