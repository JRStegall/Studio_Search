import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';


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
  <Navbar.Brand href="./Home.js">Sessions</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
      <Nav.Link className="link" href="/register">Register</Nav.Link>
      <Nav.Link className="link" href="/login">Log In</Nav.Link>
      <Nav.Link className="link" href="/search">Search</Nav.Link>
      <Nav.Link className="link" href="/chat">Chat</Nav.Link>
      <NavDropdown title="Studios" id="basic-nav-dropdown">
        <NavDropdown.Item href="/recording">Recording Studios</NavDropdown.Item>
        <NavDropdown.Item href="/rehearsal">Rehearsal Studios</NavDropdown.Item>
        <NavDropdown.Item href="/production">Production Studios</NavDropdown.Item>
        <NavDropdown.Item href="/dance">Dance Studios</NavDropdown.Item>
        {/*<NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
      </NavDropdown>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button id="searchButton" variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>

    )
}

export default Navigate;