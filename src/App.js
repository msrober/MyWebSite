import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './Components/NavBar'
import HomePage from './Components/HomePage'
import Profiles from './Components/Profiles'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Profiles />
          <img src="./images/MitchellCloseUp.png" className="App-portrait" alt="Portrait" />
          <h1>Mitchell Roberts</h1>
          <h2>Software Engineer</h2>
          <NavBar />
        </header>
        <div className = "state">
          <HomePage />
        </div>
      </div>
    );
  }
}

export default App;
