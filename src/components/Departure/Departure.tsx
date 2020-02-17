import React from 'react';
import { Link } from 'react-router-dom';
import { Ports } from '../../constants/FerryRoutes';

function Departure() {
  return (
    <div className="departure">
      {Ports.map(port => (
        <div key={port.name} className="departure-link">
          <Link to={`/${port.url}`}>{port.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Departure;
