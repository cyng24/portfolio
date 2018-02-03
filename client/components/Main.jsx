import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Resume from './Resume.jsx';

function Main () {
  return (
    <Router>
      <div>
        <Sidebar />
        <page>
        <Switch>
          <Route exact path="/" component={Projects} />
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