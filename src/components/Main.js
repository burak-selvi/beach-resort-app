import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Home, Rooms, RoomDetail, NotFound } from '../pages';

export default function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:detail" component={RoomDetail} />
      <Route component={NotFound} />
    </Switch>
  )
}
