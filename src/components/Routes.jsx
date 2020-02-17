import React, { Component } from 'react';
import Departure from './Departure';
import { Switch, Route } from 'react-router-dom';
import Journey from './Journey';

const ROUTES = [
  { path: '/', exact: true, component: Departure },
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
      </Switch>
    );
  }
}
