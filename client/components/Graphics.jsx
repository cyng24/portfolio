import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Graphics extends Component {

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
          <div class="box vertical whale" style={{ width: 18 }} focus={ "whale" } others={ ['lib', 'evidence', 'ashes', 'fiji', 'tonga'] } expandSize={ "227px" } onClick={ () => this.click("whale", ['lib', 'evidence', 'ashes', 'fiji', 'tonga'], "227px") } >
            <img class="christina-item" src="graphics/junk_whale.jpg" />
          </div>
          <div class="box vertical lib" style={{ width: 18 }} focus={ "lib" } others={ ['whale', 'evidence', 'ashes', 'fiji', 'tonga'] } expandSize={ "330px" } onClick={ () => this.click("lib", ['whale', 'evidence', 'ashes', 'fiji', 'tonga'], "330px") } >
            <img class="christina-item" src="graphics/lib_elec.jpg" />
          </div>
          <div class="box vertical evidence" style={{ width: 18 }} focus={ "evidence" } others={ ['whale', 'lib', 'ashes', 'fiji', 'tonga'] } expandSize={ "220px" } onClick={ () => this.click("evidence", ['whale', 'lib', 'ashes', 'fiji', 'tonga'], "220px") }>
            <img class="christina-item" src="graphics/evidence.jpg" />
          </div>
          <div class="box horizontal ashes" style={{ width: 18 }} focus={ "ashes" } others={ ['whale', 'lib', 'evidence', 'fiji', 'tonga'] } expandSize={ "468px" } onClick={ () => this.click("ashes", ['whale', 'lib', 'evidence', 'fiji', 'tonga'], "468px") }>
            <img class="christina-item" src="graphics/ashes.jpg" />
          </div>
          <div class="box vertical fiji" style={{ width: 18 }} focus={ "fiji" } others={ ['whale', 'lib', 'evidence', 'ashes', 'tonga'] } expandSize={ "232px" } onClick={ () => this.click("fiji", ['whale', 'lib', 'evidence', 'ashes', 'tonga'], "232px") }>
            <img class="christina-item" src="graphics/fiji.jpg" />
          </div>
          <div class="box vertical tonga" style={{ width: 18 }} focus={ "tonga" } others={ ['whale', 'lib', 'evidence', 'ashes', 'fiji'] } expandSize={ "232px" } onClick={ () => this.click("tonga", ['whale', 'lib', 'evidence', 'ashes', 'fiji'], "232px") }>
            <img class="christina-item" src="graphics/tonga.jpg" />
          </div>
        </section>
      </graphics>
    );
  }
}