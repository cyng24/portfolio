import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import About from './About';

function Main () {
  return (
    <Router>
      <div>
        <Sidebar />
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default Main;