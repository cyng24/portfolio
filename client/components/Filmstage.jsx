import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Filmstage extends Component {

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
    var stageArray = ['frida', 'cuckoo', 'child'];

    return (
      <graphics>
        <section id="design-list">
            <Link id="christinalinks" to="/christina/the-photographer">photography</Link>
            <Link id="christinalinks" to="/christina/the-graphicdesigner">graphics</Link>
            <Link id="christinalinks" to="/christina/the-architect">architecture</Link>
            <Link id="christinalinks" to="/christina/the-setdesigner">film and stage</Link>
        </section>

        <section id="christina-list">
          {/* <div class="box frida" style={{ width: "2%" }} onClick={ () => this.click(0, stageArray, "400px") } >
            <img class="christina-item" src="stages/frida1.jpg" />
          </div> */}
          <div class="box frida" style={{ width: "2%" }} onClick={ () => this.click(0, stageArray, "80%") } >
            <img class="christina-item" src="stages/frida2.jpg" />
          </div>
          <div class="box cuckoo" style={{ width: "2%" }} onClick={ () => this.click(1, stageArray, "92%") } >
            <img class="christina-item" src="stages/cuckoo1.jpg" />
          </div>
          {/* <div class="box cuckoo" style={{ width: "2%" }} onClick={ () => this.click(1, stageArray, "665px") } >
            <img class="christina-item" src="stages/cuckoo2.jpg" />
          </div> */}
          <div class="box child" style={{ width: "2%" }} onClick={ () => this.click(2, stageArray, "61%") } >
            <img class="christina-item" src="stages/obviouschild1.jpg" />
          </div>
        </section>
      </graphics>
    );
  }
}