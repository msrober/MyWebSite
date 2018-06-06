import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './Components/NavBar'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src="./images/MitchellCloseUp.png" className="App-portrait" alt="Portrait" />
          <NavBar />
          <h1 className="App-title">Mitchell Roberts</h1>
        </header>

        <p className="App-intro">
          About Me
        </p>
      </div>
    );
  }
}

export default App;
