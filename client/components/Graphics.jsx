import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Graphics extends Component {

  whaleClick() { 
    var myImg = document.getElementsByClassName('whale');
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.width;
      if(displaySetting == "15px") { myImg[i].style.width = "215px"; }
      if(displaySetting == "215px") { myImg[i].style.width = "15px"; }
    }
    var otherImg = [document.getElementsByClassName('lib')];
    otherImg.push(document.getElementsByClassName('evidence'));
    otherImg.push(document.getElementsByClassName('ashes'));
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.width;
        if (displaySetting != "15px") { otherImg[i][j].style.width = "15px"; }
      }
    }
  }
  libClick() { 
    var myImg = document.getElementsByClassName('lib');
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.width;
      if(displaySetting == "15px") { myImg[i].style.width = "315px"; }
      if(displaySetting == "315px") { myImg[i].style.width = "15px"; }
    }
    var otherImg = [document.getElementsByClassName('whale')];
    otherImg.push(document.getElementsByClassName('evidence'));
    otherImg.push(document.getElementsByClassName('ashes'));
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.width;
        if (displaySetting != "15px") { otherImg[i][j].style.width = "15px"; }
      }
    }
  }
  evidenceClick() { 
    var myImg = document.getElementsByClassName('evidence');
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.width;
      if(displaySetting == "15px") { myImg[i].style.width = "217px"; }
      if(displaySetting == "217px") { myImg[i].style.width = "15px"; }
    }
    var otherImg = [document.getElementsByClassName('whale')];
    otherImg.push(document.getElementsByClassName('lib'));
    otherImg.push(document.getElementsByClassName('ashes'));
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.width;
        if (displaySetting != "15px") { otherImg[i][j].style.width = "15px"; }
      }
    }
  }
  ashesClick() { 
    var myImg = document.getElementsByClassName('ashes');
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.width;
      if(displaySetting == "15px") { myImg[i].style.width = "452px"; }
      if(displaySetting == "452px") { myImg[i].style.width = "15px"; }
    }
    var otherImg = [document.getElementsByClassName('whale')];
    otherImg.push(document.getElementsByClassName('lib'));
    otherImg.push(document.getElementsByClassName('evidence'));
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
            <Link id="link" to="/christina/the-architect">architecture</Link>
            <Link id="link" to="/christina/the-setdesigner">film and stage</Link>
            <Link id="link" to="/christina/the-graphicdesigner">graphics</Link>
            <Link id="link" to="/christina/the-photographer">photography</Link>
        </section>

        <section id="graphic-list">
          <div class="box vertical whale" style={{ width: 15 }} onClick={ this.whaleClick }>
            <img class="graphic" src="graphics/junk_whale.jpg" />
          </div>
          <div class="box vertical lib" style={{ width: 15 }} onClick={ this.libClick }>
            <img class="graphic" src="graphics/lib_elec.jpg" />
          </div>
          <div class="box vertical evidence" style={{ width: 15 }} onClick={ this.evidenceClick }>
            <img class="graphic" src="graphics/evidence.jpg" />
          </div>
          <div class="box horizontal ashes" style={{ width: 15 }} onClick={ this.ashesClick }>
            <img class="graphic" src="graphics/ashes.jpg" />
          </div>
          <div class="box vertical fiji">
            <img class="graphic" src="graphics/fiji.jpg" />
          </div>
          <div class="box vertical tonga">
            <img class="graphic" src="graphics/tonga.jpg" />
          </div>
        </section>
      </graphics>
    );
  }
}