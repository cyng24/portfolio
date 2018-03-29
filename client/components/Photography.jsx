import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Photography extends Component {

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
      <photography>
        <section id="design-list">
            <Link id="christinalinks" to="/christina/the-architect">architecture</Link>
            <Link id="christinalinks" to="/christina/the-setdesigner">film and stage</Link>
            <Link id="christinalinks" to="/christina/the-graphicdesigner">graphics</Link>
            <Link id="christinalinks" to="/christina/the-photographer">photography</Link>
        </section>

        <section id="christina-list">
          <div class="box vertical NY1" style={{ width: 18 }} focus={ 'NY1' } others={ ['NY2', 'NY3', 'NY4', 'NY5', 'CH1', 'CH2', 'BA1', 'CP1'] } expandSize={ "276px" } onClick={ () => this.click('NY1', ['NY2', 'NY3', 'NY4', 'NY5', 'CH1', 'CH2', 'BA1', 'CP1'], "276px") } >
            <img class="christina-item" src="photos/NY-1.jpg" />
          </div>
          <div class="box vertical NY2" style={{ width: 18 }} focus={ 'NY2' } others={ ['NY1', 'NY3', 'NY4', 'NY5', 'CH1', 'CH2', 'BA1', 'CP1'] } expandSize={ "276px" } onClick={ () => this.click('NY2', ['NY1', 'NY3', 'NY4', 'NY5', 'CH1', 'CH2', 'BA1', 'CP1'], "276px") }>
            <img class="christina-item" src="photos/NY-2.jpg" />
          </div>
          <div class="box vertical NY3" style={{ width: 18 }} focus={ 'NY3' } others={ ['NY1', 'NY2', 'NY4', 'NY5', 'CH1', 'CH2', 'BA1', 'CP1'] } expandSize={ "347px" } onClick={ () => this.click('NY3', ['NY1', 'NY2', 'NY4', 'NY5', 'CH1', 'CH2', 'BA1', 'CP1'], "347px") }>
            <img class="christina-item" src="photos/NY-3.jpg" />
          </div>
          <div class="box vertical NY4" style={{ width: 18 }} focus={ 'NY4' } others={ ['NY1', 'NY2', 'NY3', 'NY5', 'CH1', 'CH2', 'BA1', 'CP1'] } expandSize={ "347px" } onClick={ () => this.click('NY4', ['NY1', 'NY2', 'NY3', 'NY5', 'CH1', 'CH2', 'BA1', 'CP1'], "347px") }>
            <img class="christina-item" src="photos/NY-4.jpg" />
          </div>
          <div class="box horizontal NY5" style={{ width: 18 }} focus={ 'NY5' } others={ ['NY1', 'NY2', 'NY3', 'NY4', 'CH1', 'CH2', 'BA1', 'CP1'] } expandSize={ "463px" } onClick={ () => this.click('NY5', ['NY1', 'NY2', 'NY3', 'NY4', 'CH1', 'CH2', 'BA1', 'CP1'], "463px") }>
            <img class="christina-item" src="photos/NY-5.jpg" />
          </div>
          <div class="box horizontal CH1" style={{ width: 18 }} focus={ 'CH1' } others={ ['NY1', 'NY2', 'NY3', 'NY4', 'NY5', 'CH2', 'BA1', 'CP1'] } expandSize={ "520px" } onClick={ () => this.click('CH1', ['NY1', 'NY2', 'NY3', 'NY4', 'NY5', 'CH2', 'BA1', 'CP1'], "520px") }>
            <img class="christina-item" src="photos/CH-1.jpg" />
          </div>
          <div class="box horizontal CH2" style={{ width: 18 }} focus={ 'CH2' } others={ ['NY1', 'NY2', 'NY3', 'NY4', 'NY5', 'CH1', 'BA1', 'CP1'] } expandSize={ "520px" } onClick={ () => this.click('CH2', ['NY1', 'NY2', 'NY3', 'NY4', 'NY5', 'CH1', 'BA1', 'CP1'], "520px") }>
            <img class="christina-item" src="photos/CH-2.jpg" />
          </div>
          <div class="box horizontal BA1" style={{ width: 18 }} focus={ 'BA1' } others={ ['NY1', 'NY2', 'NY3', 'NY4', 'NY5', 'CH1', 'CH2', 'CP1'] } expandSize={ "433px" } onClick={ () => this.click('BA1', ['NY1', 'NY2', 'NY3', 'NY4', 'NY5', 'CH1', 'CH2', 'CP1'], "433px") }>
            <img class="christina-item" src="photos/BA-1.jpg" />
          </div>
          <div class="box horizontal CP1" style={{ width: 18 }} focus={ 'CP1' } others={ ['NY1', 'NY2', 'NY3', 'NY4', 'NY5', 'CH1', 'CH2', 'BA1'] } expandSize={ "520px" } onClick={ () => this.click('CP1', ['NY1', 'NY2', 'NY3', 'NY4', 'NY5', 'CH1', 'CH2', 'BA1'], "520px") }>
            <img class="christina-item" src="photos/CP-1.jpg" />
          </div>
        </section>
        {/* <a href="https://www.instagram.com/thatquibblefish/"><img className="link-image" src="images/insta.png" /></a> */}
      </photography>
    );
  }
}