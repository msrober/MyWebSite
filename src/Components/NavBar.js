import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends React.Component {
  handleSelect(eventKey) {
    //eventKey.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <div className="NavBar">
        <Navbar inverse collapseOnSelect>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                About Me
              </NavItem>
              <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={2.1}>School</MenuItem>
                <MenuItem eventKey={2.2}>Personal</MenuItem>
                <MenuItem eventKey={2.3}>Work</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={2.3}>Contact Me</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Contact Me
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
