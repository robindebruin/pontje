import React, { Component } from 'react';
import Departure from './Departure';
import { Switch, Route, Redirect } from 'react-router-dom';
import Journey from './Journey';
import { Ports } from '../constants/FerryRoutes';

const ROUTES = [
  { path: '/:dep/:des', exact: false, component: Journey },
  { path: '/:dep', exact: false, component: Journey },
];

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        {ROUTES.map(route => (
          <Route {...route} key={route.path}></Route>
        ))}
        <Redirect to={`/${Ports[0].url}`} />
      </Switch>
    );
  }
}
