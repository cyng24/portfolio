import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Architecture extends Component {

  click(focus, others, expandSize) { 
    var myImg = document.getElementsByClassName(focus);
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.width;
      if(displaySetting == "18px") { myImg[i].style.width = expandSize; }
      if(displaySetting == expandSize) { myImg[i].style.width = "18px"; }
    }
    var otherImg = [];
    for (var i=0; i<others.length; i++) {
      otherImg.push(document.getElementsByClassName(others[i]));
    }
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.width;
        if (displaySetting != "18px") { otherImg[i][j].style.width = "18px"; }
      }
    }
  }

  render () {
    return (
      <graphics>
        <section id="design-list">
            <Link id="christinalinks" to="/christina/the-architect">architecture</Link>
            <Link id="christinalinks" to="/christina/the-setdesigner">film and stage</Link>
            <Link id="christinalinks" to="/christina/the-graphicdesigner">graphics</Link>
            <Link id="christinalinks" to="/christina/the-photographer">photography</Link>
        </section>

        <section id="christina-list">
          <div class="box 34H" style={{ width: 18 }} focus={ "34H" } others={ ['41G'] } expandSize={ "227px" } onClick={ () => this.click("34H", ['41G'], "227px") } >
            <img class="christina-item" src="drawings/34H1.jpg" />
          </div>
          <div class="box 34H" style={{ width: 18 }} focus={ "34H2" } others={ ['41G'] } expandSize={ "330px" } onClick={ () => this.click("34H", ['41G'], "330px") } >
            <img class="christina-item" src="drawings/34H2.jpg" />
          </div>
          <div class="box 41G" style={{ width: 18 }} focus={ "41G" } others={ ['34H'] } expandSize={ "330px" } onClick={ () => this.click("41G", ['34H'], "330px") } >
            <img class="christina-item" src="drawings/41G1.jpg" />
          </div>
        </section>
      </graphics>
    );
  }
}