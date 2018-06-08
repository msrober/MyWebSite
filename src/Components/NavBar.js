import React, { Component } from 'react';


class NavBar extends React.Component {
  handleSelect(eventKey) {
    //event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <div className = 'navbar'>
        <a href="./" className='homeLink'>Home</a>
        <a href="#about" className='aboutLink'>About</a>
        <div class="dropdown">
          <button class="dropbtn">Projects
            <i class="arrowDropDown fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">School</a>
            <a href="#">Personal</a>
            <a href="#">Work</a>
          </div>
        </div>
        <a href="#contact">Contact Me</a>
      </div>
    );
  }
}

export default NavBar;
