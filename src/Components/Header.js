import React from 'react';
import {Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <div>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Dream-Car</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/catalogue">Catalogue</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link eventKey={2} href="/contact">
        Contact Us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header;