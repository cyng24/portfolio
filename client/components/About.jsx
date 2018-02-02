import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {

  render () {
    return (
      <about>
        <p>I'm a designer and developer with a background in architecture and programming. I am always seeking projects that merge all of my skills, creating immersive products that incorporate spatial design and digital media.</p>
        <p>I've participated in a wide array of hackathons focused on subjects ranging from net neutrality to oceanography. I've created projects for mesh networks and VR headsets. With the growth and development of new products and platforms, I’ll never run out of things to learn.</p>
        <p>
          <a href="https://www.github.com/cyng24"><img src="images/github.png" /></a>
          <a href="https://www.linkedin.com/in/cyng24"><img src="images/linkedin.png" /></a>
        </p>
      </about>
    );
  }
}