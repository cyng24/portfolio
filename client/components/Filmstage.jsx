import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Filmstage extends Component {

  click(focus, others, expandSize) { 
    var myImg = document.getElementsByClassName(focus);
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.width;
      if(displaySetting == "22px") { myImg[i].style.width = expandSize; }
      if(displaySetting == expandSize) { myImg[i].style.width = "22px"; }
    }
    var otherImg = [];
    for (var i=0; i<others.length; i++) {
      otherImg.push(document.getElementsByClassName(others[i]));
    }
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.width;
        if (displaySetting != "22px") { otherImg[i][j].style.width = "22px"; }
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
          {/* <div class="box vertical whale" style={{ width: 22 }} focus={ "whale" } others={ ['lib', 'evidence', 'ashes', 'fiji', 'tonga'] } expandSize={ "245px" } onClick={ () => this.click("whale", ['lib', 'evidence', 'ashes', 'fiji', 'tonga'], "245px") } >
            <img class="christina-item" src="graphics/junk_whale.jpg" />
          </div> */}
        </section>
      </graphics>
    );
  }
}