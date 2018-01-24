import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {

  render () {
    return (
      <sidebar>
        <h1>Christina Ng</h1>
        <h1>________</h1>
        <li>
          <Link id="link" to="/about">about</Link>
        </li>
        <li>
        <Link id="link" to="/projects">projects</Link>
        </li>
      </sidebar>
    );
  }
}