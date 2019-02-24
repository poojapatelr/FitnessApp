import React, { Component } from 'react';
import StartScreen from './components/StartScreen.js';
import './styles/style.css'; 
import './styles/mobile.css'; 
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div>
        <StartScreen />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
