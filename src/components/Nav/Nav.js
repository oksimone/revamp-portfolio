import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import '../Nav/Nav.css'

export default () => (
  <BrowserRouter>
  <div className= "navStyle">
    <MDBNav className="flex-column">
      <MDBNavItem>
        <MDBNavLink className = "hoverbtn" style ={{color: "black"}} active to="/">Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className = "hoverbtn" style ={{color: "black"}} to="/about">About</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className = "hoverbtn" href= "#projects" style ={{color: "black"}} to="/projects">Projects</MDBNavLink>
      </MDBNavItem>
      {/* <MDBNavItem>
        <MDBNavLink className = "hoverbtn"  style ={{color: "black"}} to="/socials">Socials</MDBNavLink>
      </MDBNavItem> */}
      <MDBNavItem>
        <MDBNavLink className = "hoverbtn"  style ={{color: "black"}} to="/contact">Contact</MDBNavLink>
      </MDBNavItem>
     
    </MDBNav>
</div>
  </BrowserRouter>
);