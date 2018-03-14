import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Christina extends Component {

  render () {
    return (
      <christina>
        <section id="design-list">
            <Link id="link" to="/christina/the-architect">architecture</Link>
            <Link id="link" to="/christina/the-setdesigner">film and stage</Link>
            <Link id="link" to="/christina/the-graphicdesigner">graphics</Link>
            <Link id="link" to="/christina/the-photographer">photography</Link>
        </section>
      </christina>
    );
  }
}