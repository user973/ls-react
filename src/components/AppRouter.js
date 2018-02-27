import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import UserPage from './UserPage';
import AuthPage from './AuthPage';

export default class AppRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <PrivateRoute path="/user/dex157" component={UserPage} />
          <PrivateRoute path="/user/:name" component={UserPage} />
          <Route path="/login" component={AuthPage} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}
