import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {

  render () {
    return (
      <sidebar>
        <Link id="link" to="/"><h1>Christina Ng</h1></Link>
        <h2>________</h2>
          <Link id="link" to="/about">about</Link>
          <Link id="link" to="/projects">projects and awards</Link>
          <Link id="link" to="/resume">resume</Link>
      </sidebar>
    );
  }
}