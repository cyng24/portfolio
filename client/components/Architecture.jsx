import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Architecture extends Component {

  click(focus, others, expandSizeLeft, expandSizeRight) { 
    var myImg = document.getElementsByClassName(others[focus]);
      if(myImg[0].style.width == "2%") { myImg[0].style.width = expandSizeLeft; }
      else { myImg[0].style.width = "2%"; }
      if(myImg[1].style.width == "2%") { myImg[1].style.width = expandSizeRight; }
      else { myImg[1].style.width = "2%"; }
    var otherImg = [];
    for (var i=0; i<others.length; i++) {
      if (i != focus) { otherImg.push(document.getElementsByClassName(others[i])); }
    }
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.width;
        if (displaySetting != "2%") { otherImg[i][j].style.width = "2%"; }
      }
    }
  }

  render () {
    var archArray = ['34H', '41G', '860B'];

    return (
      <graphics>
        <section id="design-list">
            <Link id="christinalinks" to="/christina/the-photographer">photography</Link>
            <Link id="christinalinks" to="/christina/the-graphicdesigner">graphics</Link>
            <Link id="christinalinks" to="/christina/the-architect">architecture</Link>
            <Link id="christinalinks" to="/christina/the-setdesigner">film and stage</Link>
        </section>

        <section id="christina-list">
          <div class="box 34H" style={{ width: "2%" }} onClick={ () => this.click(0, archArray, "50%", "18%") } >
            <img class="christina-item" src="drawings/34H1.jpg" />
          </div>
          <div class="box 34H" style={{ width: "2%" }} onClick={ () => this.click(0, archArray, "50%", "18%") } >
            <img class="christina-item" src="drawings/34H2.jpg" />
          </div>
          <div class="box 41G" style={{ width: "2%" }} onClick={ () => this.click(1, archArray, "44%", "42%") } >
            <img class="christina-item" src="drawings/41G1.jpg" />
          </div>
          <div class="box 41G" style={{ width: "2%" }} onClick={ () => this.click(1, archArray, "44%", "42%") } >
            <img class="christina-item" src="drawings/41G2.jpg" />
          </div>
          <div class="box 860B" style={{ width: "2%" }} onClick={ () => this.click(2, archArray, "30.5%", "31%") } >
            <img class="christina-item" src="drawings/860B1.jpg" />
          </div>
          <div class="box 860B" style={{ width: "2%" }} onClick={ () => this.click(2, archArray, "30.5%", "31%") } >
            <img class="christina-item" src="drawings/860B2.jpg" />
          </div>
        </section>
      </graphics>
    );
  }
}