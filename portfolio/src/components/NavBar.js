import React from "react";
import "../../src/Nav.css";
import {Navbar, Container, Nav, } from 'react-bootstrap'

// import { Container, navbar } from "react-bootstrap";



function NavBar() {
  return (
    <div>
        <Navbar className = "shadow-none" fixed="top" expand = "sm">
  <Container>
    <Navbar.Brand id="text" href="#">oksimone</Navbar.Brand>

    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="#about" id="text">about</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" id="text" href= "#work">work</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" id="text">social</Nav.Link>
    </Nav.Item>
    {/* <Nav.Item>
      <Nav.Link eventKey="link-2" id="text">Link</Nav.Link>
    </Nav.Item> */}
   
  </Nav>


  </Container>
</Navbar>
    </div>
  );
}

export default NavBar;
