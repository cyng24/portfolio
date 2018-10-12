import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Graphics extends Component {

  click(focus, others, expandSize) { 
    var myImg = document.getElementsByClassName(others[focus]);
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.width;
      if(displaySetting == "2%") { myImg[i].style.width = expandSize; }
      if(displaySetting == expandSize) { myImg[i].style.width = "2%"; }
    }
    var otherImg = [];
    for (var i=0; i<others.length; i++) {
      if(i != focus) { otherImg.push(document.getElementsByClassName(others[i])); }
    }
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.width;
        if (displaySetting != "2%") { otherImg[i][j].style.width = "2%"; }
      }
    }
  }

  render () {
    var graphicsArray = ['whale', 'lib', 'evidence', 'ashes', 'fiji', 'tonga'];

    return (
      <graphics>
        <section id="design-list">
            <Link id="christinalinks" to="/christina/the-photographer">photography</Link>
            <Link id="christinalinks" to="/christina/the-graphicdesigner">graphics</Link>
            <Link id="christinalinks" to="/christina/the-architect">architecture</Link>
            <Link id="christinalinks" to="/christina/the-setdesigner">film and stage</Link>
        </section>

        <section id="christina-list">
          <div class="box vertical whale" style={{ width: "2%" }} onClick={ () => this.click(0, graphicsArray, "29%") } >
            <img class="christina-item" src="graphics/junk_whale.jpg" />
          </div>
          <div class="box vertical lib" style={{ width: "2%" }} onClick={ () => this.click(1, graphicsArray, "42.5%") } >
            <img class="christina-item" src="graphics/lib_elec.jpg" />
          </div>
          <div class="box vertical evidence" style={{ width: "2%" }} onClick={ () => this.click(2, graphicsArray, "29%") }>
            <img class="christina-item" src="graphics/evidence.jpg" />
          </div>
          <div class="box horizontal ashes" style={{ width: "2%" }} onClick={ () => this.click(3, graphicsArray, "61%") }>
            <img class="christina-item" src="graphics/ashes.jpg" />
          </div>
          <div class="box vertical fiji" style={{ width: "2%" }} onClick={ () => this.click(4, graphicsArray, "30%") }>
            <img class="christina-item" src="graphics/fiji.jpg" />
          </div>
          <div class="box vertical tonga" style={{ width: "2%" }} onClick={ () => this.click(5, graphicsArray, "30%") }>
            <img class="christina-item" src="graphics/tonga.jpg" />
          </div>
        </section>
      </graphics>
    );
  }
}