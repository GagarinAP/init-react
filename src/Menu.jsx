import React from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

export default class Menu extends React.Component{
  render(){
    return(
      <Navbar>
      <div className="container">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Harley</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Link1</NavItem>
          <NavItem eventKey={2} href="#">Link2</NavItem>
        </Nav>
        </div>
      </Navbar>
    );
  }
}
