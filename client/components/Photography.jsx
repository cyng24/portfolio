import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Photography extends Component {

  render () {
    return (
      <photography>
        <section id="design-list">
            <Link id="link" to="/christina/the-architect">architecture</Link>
            <Link id="link" to="/christina/the-setdesigner">film and stage</Link>
            <Link id="link" to="/christina/the-graphicdesigner">graphics</Link>
            <Link id="link" to="/christina/the-photographer">photography</Link>
        </section>

        <section id="photo-list">
          <div class="box vertical">
            <img class="photo" src="photos/NY-1.jpg" />
          </div>
          <div class="box vertical">
            <img class="photo" src="photos/NY-2.jpg" />
          </div>
          <div class="box vertical">
            <img class="photo" src="photos/NY-3.jpg" />
          </div>
          <div class="box vertical">
            <img class="photo" src="photos/NY-4.jpg" />
          </div>
          <div class="box horizontal">
            <img class="photo" src="photos/NY-5.jpg" />
          </div>
          <div class="box horizontal">
            <img class="photo" src="photos/CH-1.jpg" />
          </div>
          <div class="box horizontal">
            <img class="photo" src="photos/CH-2.jpg" />
          </div>
          <div class="box horizontal">
            <img class="photo" src="photos/BA-1.jpg" />
          </div>
          <div class="box horizontal">
            <img class="photo" src="photos/CP-1.jpg" />
          </div>
        </section>
        {/* <a href="https://www.instagram.com/thatquibblefish/"><img className="link-image" src="images/insta.png" /></a> */}
      </photography>
    );
  }
}