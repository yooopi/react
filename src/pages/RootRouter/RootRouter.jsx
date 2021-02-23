import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Chats from '../Chats';
import Layout from '../../components/Layout/Layout';

const Router = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/chats">
          <Chats />
        </Route>
        <Route>
          <h1>404 Page not found</h1>
        </Route>
      </Switch>
    </Layout>
  );
};

export default Router;
