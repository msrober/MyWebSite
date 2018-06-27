import React from 'react';
import NavBar from './NavBar'
import Profiles from './Profiles'


class Header extends React.Component {

  render() {
    return (
      <div>
        <header className="App-header">
          <Profiles />
          <img src="./images/MitchellCloseUp.png" className="App-portrait" alt="Portrait" />
          <h1 className = "HName">Mitchell Roberts</h1>
          <h2 className = "HDegree">Software Engineer</h2>
          <NavBar />
        </header>
      </div>
    );
  }
}

export default Header;
