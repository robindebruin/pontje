import React from 'react';
import Departure from './Departure';
import Destination from './Destination';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Ports } from '../constants/FerryRoutes';
import { RouteInfo } from '../constants/FerryTime.interface';

function Journey(props: RouteComponentProps<RouteInfo>) {
  const { dep, des } = props.match.params;
  const departurePort = Ports.find(p => dep === p.url);
  const destinationPort = Ports.find(p => des === p.url);

  return (
    <>
      <Departure departurePort={departurePort} />
      <Destination departurePort={departurePort} destinationPort={destinationPort} />
    </>
  );
}

export default withRouter(Journey);
