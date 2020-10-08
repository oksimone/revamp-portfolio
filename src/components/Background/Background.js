import React from "react";
import "../Background/Background.css";
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import Header from '../Header/Header'
import BrowserRouter from '../Nav/Nav'

const Background = () => {
  return <div className="parallax">
  <BrowserRouter/>
  <MDBContainer className = "bgContainer">
  <MDBRow>
  <MDBCol size="12">
  <Header />
  </MDBCol>
  </MDBRow>
  </MDBContainer>
  </div>;
 
};
export default Background;