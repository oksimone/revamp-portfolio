import React from "react";
import "../../src/Nav.css";
import {Navbar, Container, Nav, } from 'react-bootstrap'

const styles = {
  marginLeft: '-15px',
 
}



function NavBar() {
  return (
    <div>
        <Navbar className = "shadow-none" fixed="top" expand = "lg">
  <Container>
  
    <Navbar.Brand className = "flex-start" id="text" href="#" style = {styles} >oksimone</Navbar.Brand>
  
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="#about" id="text">about</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" id="text" href= "#work">work</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" id="text" href = "#social">social</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" id="text" href = "#contact">contact</Nav.Link>
    </Nav.Item>
   
  </Nav>


  </Container>
</Navbar>
    </div>
  );
}

export default NavBar;
