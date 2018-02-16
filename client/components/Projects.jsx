import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends Component {

  coquillClick() { 
    var myImg = document.getElementsByClassName('coquill');
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.opacity;
      if (displaySetting == "0") { myImg[i].style.opacity = 0.9; }
      if (displaySetting == "1") { myImg[i].style.opacity = 0.2; }
      if (displaySetting == "0.9") { myImg[i].style.opacity = 0; }
      if (displaySetting == "0.2") { myImg[i].style.opacity = 1; }
    }
    var otherImg = [document.getElementsByClassName('meltdown')];
    otherImg.push(document.getElementsByClassName('deep'));
    otherImg.push(document.getElementsByClassName('butterfly'));
    otherImg.push(document.getElementsByClassName('award'));
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.opacity;
        if (displaySetting == "0.9") { otherImg[i][j].style.opacity = 0; }
        if (displaySetting == "0.2") { otherImg[i][j].style.opacity = 1; }
      }
    }
  }

  meltdownClick() { 
    var myImg = document.getElementsByClassName('meltdown');
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.opacity;
      if (displaySetting == "0") { myImg[i].style.opacity = 0.9; }
      if (displaySetting == "1") { myImg[i].style.opacity = 0.2; }
      if (displaySetting == "0.9") { myImg[i].style.opacity = 0; }
      if (displaySetting == "0.2") { myImg[i].style.opacity = 1; }
    }
    var otherImg = [document.getElementsByClassName('coquill')];
    otherImg.push(document.getElementsByClassName('deep'));
    otherImg.push(document.getElementsByClassName('butterfly'));
    otherImg.push(document.getElementsByClassName('award'));
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.opacity;
        if (displaySetting == "0.9") { otherImg[i][j].style.opacity = 0; }
        if (displaySetting == "0.2") { otherImg[i][j].style.opacity = 1; }
      }
    }
  }

  deepClick() { 
    var myImg = document.getElementsByClassName('deep');
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.opacity;
      if (displaySetting == "0") { myImg[i].style.opacity = 0.9; }
      if (displaySetting == "1") { myImg[i].style.opacity = 0.2; }
      if (displaySetting == "0.9") { myImg[i].style.opacity = 0; }
      if (displaySetting == "0.2") { myImg[i].style.opacity = 1; }
    }
    var otherImg = [document.getElementsByClassName('coquill')];
    otherImg.push(document.getElementsByClassName('meltdown'));
    otherImg.push(document.getElementsByClassName('butterfly'));
    otherImg.push(document.getElementsByClassName('award'));
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.opacity;
        if (displaySetting == "0.9") { otherImg[i][j].style.opacity = 0; }
        if (displaySetting == "0.2") { otherImg[i][j].style.opacity = 1; }
      }
    }
  }

  butterflyClick() { 
    var myImg = document.getElementsByClassName('butterfly');
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.opacity;
      if (displaySetting == "0") { myImg[i].style.opacity = 0.9; }
      if (displaySetting == "1") { myImg[i].style.opacity = 0.2; }
      if (displaySetting == "0.9") { myImg[i].style.opacity = 0; }
      if (displaySetting == "0.2") { myImg[i].style.opacity = 1; }
    }
    var otherImg = [document.getElementsByClassName('coquill')];
    otherImg.push(document.getElementsByClassName('meltdown'));
    otherImg.push(document.getElementsByClassName('deep'));
    otherImg.push(document.getElementsByClassName('award'));
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.opacity;
        if (displaySetting == "0.9") { otherImg[i][j].style.opacity = 0; }
        if (displaySetting == "0.2") { otherImg[i][j].style.opacity = 1; }
      }
    }
  }

  awardClick() { 
    var myImg = document.getElementsByClassName('award');
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.opacity;
      if (displaySetting == "0") { myImg[i].style.opacity = 0.9; }
      if (displaySetting == "1") { myImg[i].style.opacity = 0.2; }
      if (displaySetting == "0.9") { myImg[i].style.opacity = 0; }
      if (displaySetting == "0.2") { myImg[i].style.opacity = 1; }
    }
    var otherImg = [document.getElementsByClassName('coquill')];
    otherImg.push(document.getElementsByClassName('meltdown'));
    otherImg.push(document.getElementsByClassName('deep'));
    otherImg.push(document.getElementsByClassName('butterfly'));
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.opacity;
        if (displaySetting == "0.9") { otherImg[i][j].style.opacity = 0; }
        if (displaySetting == "0.2") { otherImg[i][j].style.opacity = 1; }
      }
    }
  }

  render () {
    return (
      <projects>
        <section id="project-list">
          <div id="flex">
            <p>
              <input type="image" class="project-image coquill" src="images/burnt_quill.png" style={{ opacity: 1 }} onClick={ this.coquillClick } />
              <text class="project-name coquill" style={{ opacity: 0 }}>
                <b>COQUILL</b>
              </text>
            </p>

            <p>
              <input type="image" className="project-image meltdown" src="images/finalmeltdown.png" style={{ opacity: 1 }} onClick={ this.meltdownClick } />
              <text className="project-name meltdown" style={{ opacity: 0 }}>
                <b>FINAL MELTDOWN</b>
              </text>
            </p>

             <p>
              <input type="image" className="project-image deep" src="images/whale.png" style={{ opacity: 1 }} onClick={ this.deepClick } />
              <text className="project-name deep" style={{ opacity: 0 }}>
                <b>HACK THE DEEP</b>
              </text>
            </p>
            
            <p>
              <input type="image" className="project-image butterfly" src="images/butterfly.png" style={{ opacity: 1 }} onClick={ this.butterflyClick } /> 
              <text className="project-name butterfly" style={{ opacity: 0 }}>
                <b>BUTTERFLY HUNT</b>
              </text>
            </p>

            <p>
              <input type="image" className="project-image award" src="images/award.png" style={{ opacity: 1 }} onClick={ this.awardClick } />
              <text className="project-name award" style={{ opacity: 0 }}>
                <b>AWARDS</b>
              </text>
            </p>
          </div>

          <div>
            <p class="project-text coquill" style={{ opacity: 0 }}>
              A web-based tool for screenwriters to collaborate in real time on a document that automatically formats into a screenplay.<br /><br />
              For my capstone project at the Grace Hopper program, I learned how to use Google Firebase to update data in real-time as well as construct a series of text editors that automatically format to screenplay standards.<br /><br />
              <b style={{ fontSize: 12 }}>Javascript CSS HTML Firebase Immutable</b><br /><br />
              <a href="https://coquill-e559a.firebaseapp.com/"><button class="button">try me</button></a>
            </p>

            <p class="project-text meltdown" style={{ opacity: 0 }}>
              A virtual reality app that depicts the effects of climate change on the Arctic Circle by placing the viewer in a melting icescape.<br /><br />
              I attended SheHacks Boston, where I learned A-Frame and Glitch, and developed a platform for the Samsung Gear VR over the course of 48 hours. Out of a 100 teams, ours won Best Open Source Project.<br /><br />
              <b style={{ fontSize: 12 }}>Javascript HTML A-Frame Glitch Samsung Gear VR</b><br /><br />
              <a href="https://thefinalmeltdown.glitch.me/"><button class="button">try me</button></a>
            </p>

            <p class="project-text deep" style={{ opacity: 0 }}>
              A data visualization of ocean currents to plot and predict the most likely path of plastics that end up in the North Pacific Garbage Patch.<br /><br />
              <b style={{ fontSize: 12 }}>HTML Python Pandas CartoJS</b><br /><br />
              <a href="https://hackthedeep.github.io/flotsam-and-jetsam"><button class="button">try me</button></a>
            </p>

            <p class="project-text butterfly" style={{ opacity: 0 }}>
              A mobile augmented reality game where Grace Hopper students search for butterflies that appear on the the GH logo.<br /><br />
              <b style={{ fontSize: 12 }}>Unity C# Vuforia Android Studio</b><br /><br />
              {/* <a href="https://www.youtube.com/watch?v=Y9MLgQTFiHk"><button class="button">try me</button></a> */}
            </p>
            
            <p class="project-text award" style={{ opacity: 0 }}>
              <b>Red Hat Best Open Source Project</b><br />
              <i>SheHacks Boston</i>
            </p> 
          </div>
        </section>
      </projects>
    );
  }
}

