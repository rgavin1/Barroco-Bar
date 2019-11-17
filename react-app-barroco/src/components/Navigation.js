import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
    return (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Barroco</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto text-center">
      <Nav.Link href="#Menu">Menu</Nav.Link>
      <Nav.Link href="#Order">Order Online</Nav.Link>
      <Nav.Link href="#About">About Us</Nav.Link>
      <Nav.Link href="#Happy">Happy Hours</Nav.Link>
      <Nav.Link href="#Locations">Locations</Nav.Link>
      <Nav.Link href="#Music">Live Music</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
    </Nav>
    <Nav className="text-center" >
        <Nav.Link href="#">
            <FontAwesomeIcon icon={faFacebook} />
        </Nav.Link>
        <Nav.Link href="#">
            <FontAwesomeIcon icon={faInstagram} />
        </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}

export default Navigation;