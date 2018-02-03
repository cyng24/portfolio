import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends Component {

  render () {

    return (
      <projects>
      {/* <h1>Projects</h1> */}
      {/* <img className="projects-arrow" src="images/down_arrow.png" /> */}
        <section id="project-list">
          <p>
            <a className="project-title" href="https://coquill-e559a.firebaseapp.com/"><img className="project-image" src="images/burnt_quill.png" /><b>coquill ></b></a>  
            <text className="project-text">
            <br></br><br></br>
            A web-based tool for screenwriters to collaborate in real time on a document that automatically formats into a screenplay.
            </text>
          </p>

          <p>
            <a className="project-title" href="https://thefinalmeltdown.glitch.me"><img className="project-image" src="images/finalmeltdown.png" /><b>final meltdown ></b></a>
            <text className="project-text">
            <br></br><br></br>
            A virtual reality application that depict the effects of climate change on the Arctic Circle by placing the viewer in a melting icescape.
            </text>
          </p>
          
          <p>
            <a className="award-title"><img className="project-image" src="images/award.png" /><b>awards ></b></a>
            <text className="award-text">
              <br /><br />
              <b>Red Hat Best Open Source Project</b>
              <br />
              <i>SheHacks Boston</i>
            </text>
          </p>
        </section>
{/*         
        <h1>Awards</h1>
          <img id="awards-arrow" alt="image_not" src="images/down_arrow.png" />
          <section id="awards">
            <p>
              <text className="carousel-text">
              <b>Red Hat Best Open Source Project</b>
              <br></br>
              <i>SheHacks Boston</i>
              </text>
            </p>
          </section>
*/}
      </projects>
    );
  }
}

