import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Graphics extends Component {

  render () {
    return (
      <graphics>
        <section id="design-list">
            <Link id="link" to="/christina/the-architect">architecture</Link>
            <Link id="link" to="/christina/the-setdesigner">film and stage</Link>
            <Link id="link" to="/christina/the-graphicdesigner">graphics</Link>
            <Link id="link" to="/christina/the-photographer">photography</Link>
        </section>

        <section id="graphic-list">
          <div id="box">
            <img class="vertical whale" src="graphics/junk_whale.jpg" />
          </div>
          <div id="box">
            <img class="vertical" src="graphics/lib_elec.jpg" />
          </div>
          <div id="box">
            <img class="vertical evidence" src="graphics/evidence.jpg" />
          </div>
          <div id="box">
            <img class="horizontal ashes" src="graphics/ashes.jpg" />
          </div>
          <div id="box">
            <img class="vertical" src="graphics/fiji.jpg" />
          </div>
          <div id="box">
            <img class="vertical" src="graphics/tonga.jpg" />
          </div>
        </section>
      </graphics>
    );
  }
}