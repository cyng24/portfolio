import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';

function Main () {
  return (
    <Router>
      <div>
        <Sidebar />
        <page>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        </page>
      </div>
    </Router>
  );
}

export default Main;