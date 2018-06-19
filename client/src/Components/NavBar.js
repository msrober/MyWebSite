import React from 'react';
import { Link } from 'react-router-dom';



class NavBar extends React.Component {
  render() {
    return (
      <div className = 'navbar'>
        <Link to = {'/'} className='homeLink'>
          About
        </Link>
        <Link to = './Personal' className='contactMe'>
          Projects
        </Link>
        {/*
        <div className="dropdown">
          <button className="dropbtn">Projects
            <i className="arrowDropDown fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to = './School' className='SchoolLink'>
              School
            </Link>
            <Link to = './Personal' className='PersonalLink'>
              Personal
            </Link>
            <Link to = './Work' className='Work'>
              Work
            </Link>
          </div>
        </div>
        */}
        <Link to = './Contact' className='contactMe'>
          Contact Me
        </Link>
      </div>
    );
  }
}

export default NavBar;
