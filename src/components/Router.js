import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Restaurants from './Resturants';
import ResturantDetails from './ResturantDetails';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/login' component={Login} exact />
      <Route path='/logout' component={Logout} exact />
      <Route path='/resturants' component={Restaurants} />
      <Route path='/resturants/:id' component={ResturantDetails} />
      <Route component={NotFound} />

    </Switch>
  </BrowserRouter>
);

export default Router;