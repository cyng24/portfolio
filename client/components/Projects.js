import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends Component {

  render () {
    return (
      <projects>

        <h1>Projects</h1><img className="projects-arrow" src="images/down_arrow.png" />

        <section id="carousel">
          <p>
            <a href="https://coquill-e559a.firebaseapp.com/"><img className="carousel-image" src="images/burnt_quill.png" /></a>  
            <text className="carousel-text">
            <br></br><br></br>
            A web-based tool for screenwriters to collaborate in real time on a document that auto-formats into a screenplay.
            <br></br><br></br>
            Try writing a screenplay by clicking on the icon!
            <br></br><br></br>
            </text>
          </p>
          <p>
            <a href="https://thefinalmeltdown.glitch.me"><img className="carousel-image" src="images/finalmeltdown.png" /></a>
            <text className="carousel-text">
            <br></br><br></br>
            A virtual reality application that depict the effects of climate change on the Arctic Circle by placing the viewer in a melting icescape.
            <br></br><br></br>
            Try it on desktop, mobile phone, or VR gear!
            <br></br><br></br>
            </text>
          </p>
            <img className="carousel-image" src="images/electricity.png" />
            <img className="carousel-image" src="images/fallout.png" />
        </section>
        
        <h1>Awards</h1><img className="awards-arrow" src="images/down_arrow.png" />
          <section id="awards">
            <p>
              <text className="carousel-text">
              <b>Red Hat Best Open Source Project</b>
              <br></br>
              <i>SheHacks Boston</i>
              </text>
            </p>
          </section>
      </projects>
    );
  }
}