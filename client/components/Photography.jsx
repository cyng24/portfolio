import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Photography extends Component {

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
    var photoArray = ['NY1', 'NY2', 'NY3', 'NY4', 'NY5', 'CH1', 'CH2', 'BA1', 'CP1', 'PA1', 'PA2', 'PA3'];

    return (
      <photography>
        <section id="design-list">
            <Link id="christinalinks" to="/christina/the-photographer">photography</Link>
            <Link id="christinalinks" to="/christina/the-graphicdesigner">graphics</Link>
            <Link id="christinalinks" to="/christina/the-architect">architecture</Link>
            <Link id="christinalinks" to="/christina/the-setdesigner">film and stage</Link>
        </section>

        <section id="christina-list">
          <div class="box NY1" style={{ width: "2%" }} onClick={ () => this.click(0, photoArray, "36%") } >
            <img class="christina-item" src="photos/NY-1.jpg" />
          </div>
          <div class="box NY2" style={{ width: "2%" }} onClick={ () => this.click(1, photoArray, "36%") }>
            <img class="christina-item" src="photos/NY-2.jpg" />
          </div>
          <div class="box NY3" style={{ width: "2%" }} onClick={ () => this.click(2, photoArray, "45%") }>
            <img class="christina-item" src="photos/NY-3.jpg" />
          </div>
          <div class="box NY4" style={{ width: "2%" }} onClick={ () => this.click(3, photoArray, "45%") }>
            <img class="christina-item" src="photos/NY-4.jpg" />
          </div>
          <div class="box NY5" style={{ width: "2%" }} onClick={ () => this.click(4, photoArray, "60%") }>
            <img class="christina-item" src="photos/NY-5.jpg" />
          </div>
          <div class="box CH1" style={{ width: "2%" }} onClick={ () => this.click(5, photoArray, "65%") }>
            <img class="christina-item" src="photos/CH-1.jpg" />
          </div>
          <div class="box CH2" style={{ width: "2%" }} onClick={ () => this.click(6, photoArray, "65%") }>
            <img class="christina-item" src="photos/CH-2.jpg" />
          </div>
          <div class="box BA1" style={{ width: "2%" }} onClick={ () => this.click(7, photoArray, "56%") }>
            <img class="christina-item" src="photos/BA-1.jpg" />
          </div>
          <div class="box CP1" style={{ width: "2%" }} onClick={ () => this.click(8, photoArray, "65%") }>
            <img class="christina-item" src="photos/CP-1.jpg" />
          </div>
          <div class="box PA1" style={{ width: "2%" }} onClick={ () => this.click(9, photoArray, "30%") }>
            <img class="christina-item" src="photos/PA-1.jpg" />
          </div>
          <div class="box PA2" style={{ width: "2%" }} onClick={ () => this.click(10, photoArray, "65%") }>
            <img class="christina-item" src="photos/PA-2.jpg" />
          </div>
          <div class="box PA3" style={{ width: "2%" }} onClick={ () => this.click(11, photoArray, "30%") }>
            <img class="christina-item" src="photos/PA-3.jpg" />
          </div>
        </section>
        {/* <a href="https://www.instagram.com/thatquibblefish/"><img className="link-image" src="images/insta.png" /></a> */}
      </photography>
    );
  }
}