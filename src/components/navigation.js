import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends Component {
render() {
    return (
      <Navbar data-bs-theme="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/"> 
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/rsvp">RSVP</Nav.Link>
              <Nav.Link href="/about">Our story</Nav.Link>
              <Nav.Link href="/travel">Travel and stay</Nav.Link>
              <Nav.Link href="/registry">Registry</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Navigation;