import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Resume extends Component {

  render () {
    return (
      <resume>
        <h1>Resume</h1>
        <img className="resume-image" src="images/resume.png" />
      </resume>
    );
  }
}