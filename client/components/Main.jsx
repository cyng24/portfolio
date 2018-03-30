import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Resume from './Resume.jsx';
import Christina from './Christina.jsx';
import Graphics from './Graphics.jsx';
import Photography from './Photography.jsx';
import Architecture from './Architecture.jsx';
import Filmstage from './Filmstage.jsx';

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
          <Route exact path="/christina" component={Christina} />
          <Route exact path="/christina/the-architect" component={Architecture} />
          <Route exact path="/christina/the-setdesigner" component={Filmstage} />
          <Route exact path="/christina/the-graphicdesigner" component={Graphics} />
          <Route exact path="/christina/the-photographer" component={Photography} />
        </Switch>
        </page>
      </div>
    </Router>
  );
}

export default Main;