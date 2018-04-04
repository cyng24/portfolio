import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Filmstage extends Component {

  click(focus, others, expandSize) { 
    var myImg = document.getElementsByClassName(focus);
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.width;
      if(displaySetting == "15px") { myImg[i].style.width = expandSize; }
      if(displaySetting == expandSize) { myImg[i].style.width = "15px"; }
    }
    var otherImg = [];
    for (var i=0; i<others.length; i++) {
      otherImg.push(document.getElementsByClassName(others[i]));
    }
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.width;
        if (displaySetting != "15px") { otherImg[i][j].style.width = "15px"; }
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
          {/* <div class="box frida" style={{ width: 15 }} focus={ "frida" } others={ ['cuckoo'] } expandSize={ "400px" } onClick={ () => this.click("frida", ['cuckoo'], "400px") } >
            <img class="christina-item" src="stages/frida1.jpg" />
          </div> */}
          <div class="box frida" style={{ width: 15 }} focus={ "frida" } others={ ['cuckoo'] } expandSize={ "665px" } onClick={ () => this.click("frida", ['cuckoo'], "665px") } >
            <img class="christina-item" src="stages/frida2.jpg" />
          </div>
          <div class="box cuckoo" style={{ width: 15 }} focus={ "cuckoo" } others={ ['frida'] } expandSize={ "735px" } onClick={ () => this.click("cuckoo", ['frida'], "735px") } >
            <img class="christina-item" src="stages/cuckoo1.jpg" />
          </div>
          {/* <div class="box cuckoo" style={{ width: 15 }} focus={ "cuckoo" } others={ ['frida'] } expandSize={ "665px" } onClick={ () => this.click("cuckoo", ['frida'], "665px") } >
            <img class="christina-item" src="stages/cuckoo2.jpg" />
          </div> */}
        </section>
      </graphics>
    );
  }
}