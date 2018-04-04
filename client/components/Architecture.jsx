import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Architecture extends Component {

  click(focus, others, expandSizeLeft, expandSizeRight) { 
    var myImg = document.getElementsByClassName(focus);
      if(myImg[0].style.width == "12px") { myImg[0].style.width = expandSizeLeft; }
      else { myImg[0].style.width = "12px"; }
      if(myImg[1].style.width == "12px") { myImg[1].style.width = expandSizeRight; }
      else { myImg[1].style.width = "12px"; }
    var otherImg = [];
    for (var i=0; i<others.length; i++) {
      otherImg.push(document.getElementsByClassName(others[i]));
    }
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.width;
        if (displaySetting != "12px") { otherImg[i][j].style.width = "12px"; }
      }
    }
  }

  render () {
    return (
      <graphics>
        <section id="design-list">
            <Link id="christinalinks" to="/christina/the-photographer">photography</Link>
            <Link id="christinalinks" to="/christina/the-graphicdesigner">graphics</Link>
            <Link id="christinalinks" to="/christina/the-architect">architecture</Link>
            <Link id="christinalinks" to="/christina/the-setdesigner">film and stage</Link>
        </section>

        <section id="christina-list">
          <div class="box 34H" style={{ width: 12 }} focus={ "34H" } others={ ['41G', '860B'] } expandSizeLeft={ "420px" } expandSizeRight={ "150px" } onClick={ () => this.click("34H", ['41G', '860B'], "420px", "150px") } >
            <img class="christina-item" src="drawings/34H1.jpg" />
          </div>
          <div class="box 34H" style={{ width: 12 }} focus={ "34H2" } others={ ['41G', '860B'] } expandSizeLeft={ "420px" } expandSizeRight={ "150px" } onClick={ () => this.click("34H", ['41G', '860B'], "420px", "150px") } >
            <img class="christina-item" src="drawings/34H2.jpg" />
          </div>
          <div class="box 41G" style={{ width: 12 }} focus={ "41G" } others={ ['34H', '860B'] } expandSizeLeft={ "365px" } expandSizeRight={ "355px" } onClick={ () => this.click("41G", ['34H', '860B'], "365px", "355px") } >
            <img class="christina-item" src="drawings/41G1.jpg" />
          </div>
          <div class="box 41G" style={{ width: 12 }} focus={ "41G" } others={ ['34H', '860B'] } expandSizeLeft={ "365px" } expandSizeRight={ "355px" } onClick={ () => this.click("41G", ['34H', '860B'], "365px", "355px") } >
            <img class="christina-item" src="drawings/41G2.jpg" />
          </div>
          <div class="box 860B" style={{ width: 12 }} focus={ "860B" } others={ ['34H', '41G'] } expandSizeLeft={ "255px" } expandSizeRight={ "255px" } onClick={ () => this.click("860B", ['34H', '41G'], "255px", "255px") } >
            <img class="christina-item" src="drawings/860B1.jpg" />
          </div>
          <div class="box 860B" style={{ width: 12 }} focus={ "860B" } others={ ['34H', '41G'] } expandSizeLeft={ "255px" } expandSizeRight={ "255px" } onClick={ () => this.click("860B", ['34H', '41G'], "255px", "255px") } >
            <img class="christina-item" src="drawings/860B2.jpg" />
          </div>
        </section>
      </graphics>
    );
  }
}