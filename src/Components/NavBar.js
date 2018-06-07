import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


class NavBar extends React.Component {
  handleSelect(eventKey) {
    //event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <div className = 'NavBarTool'>
        <Navbar inverse collapseOnSelect>
            <Nav>
              <NavItem eventKey={1} href="#">
                About Me
              </NavItem>
              <NavDropdown eventKey={2} title="Projects" id="basic-nav-dropdown">
                <MenuItem eventKey={2.1}>School</MenuItem>
                <MenuItem eventKey={2.2}>Personal</MenuItem>
                <MenuItem eventKey={2.3}>Work</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={2.3}>Contact Me</MenuItem>
              </NavDropdown>

              <NavItem eventKey={1} href="#">
                Contact Me
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
