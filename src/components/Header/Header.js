import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import '../Header/Header.css'

const Header = () => {
  return (
    <MDBContainer>
    <MDBRow>
      <MDBCol>

      <p style = {{alignSelf:"center", border:"1px solid black", fontSize:'35px', fontWeight:"bold", color:"white"}}>
        WELCOME TO KRISTIAN'S PORTFOLIO
      </p>

      </MDBCol>
    </MDBRow>
    </MDBContainer>
  );
};

export default Header;
