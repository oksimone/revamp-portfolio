import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../Nav/Nav.css";
import ParticlesBg from "../ParticlesBg";

function NavBar() {
  return (
      <>
    <Container className="justify-content-center">
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/">oksimone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mb-auto">
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/projects">projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  

    </>
  );
}

export default NavBar;
