import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Ports } from '../constants/FerryRoutes';
import Journey from './Journey';

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
