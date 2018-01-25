import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends Component {

  render () {
    return (
      <projects>
        <h1>Projects</h1>

        <section id="carousel">
            <img className="carousel-image" src="images/coquill.png" />
            <img className="carousel-image" src="images/disability.png" />
            <img className="carousel-image" src="images/electricity.png" />
            <img className="carousel-image" src="images/fallout.png" />
        </section>

      </projects>
    );
  }
}