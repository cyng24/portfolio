import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {

  render () {
    return (
      <sidebar>
        <h1>Christina Ng</h1>
        <h2>________</h2>
          <Link id="link" to="/about">about</Link>
          <Link id="link" to="/projects">projects</Link>
          <Link id="link" to="/resume">resume</Link>
      </sidebar>
    );
  }
}