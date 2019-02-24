import React, { Component } from 'react';
import '../styles/style.css'; 
import '../styles/mobile.css'; 
import ladyInYoga from '../images/lady-in-yoga.jpg';

class Home extends Component {
    render() {
       return (
        <div id="body">
          <div id="tagline">
            <h1>Kaizen</h1>
            <p>
              For Better Health &amp; Fitness
            </p>
          </div>
          <img src={ladyInYoga} alt="lady doing yoga" className="figure" />
        </div>
       )
    }
  }
  export default Home;