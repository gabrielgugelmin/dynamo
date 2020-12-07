import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';
import LoginContainer from '~/modules/Login';
import HomeContainer from '~/modules/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LoginContainer} isPrivate={false} />
      <Route exact path="/home" component={HomeContainer} isPrivate />

      <Redirect to="/" />
    </Switch>
  );
}
