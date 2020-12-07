import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navigate(){
    return(
       
<Navbar bg="light" variant="light" expand="lg" sticky="top">
<img
    alt="Sessions Logo"
    src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/17983649771595501283-512.png"
    width="30"
    height="30"
    className="d-inline-block align-top"
  />
  <Navbar.Brand as={Link} to="./Home.js">Sessions</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
      <Nav.Link as={Link} className="link" to="/register">Register</Nav.Link>
      <Nav.Link as={Link} className="link" to="/login">Log In</Nav.Link>
      <Nav.Link as={Link} className="link" to="/search">Search</Nav.Link>
      <Nav.Link as={Link} className="link" to="/chat">Chat</Nav.Link>
      <NavDropdown title="Studios" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/recording">Recording Studios</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/rehearsal">Rehearsal Studios</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/production">Production Studios</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/dance">Dance Studios</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    )
}

export default Navigate;