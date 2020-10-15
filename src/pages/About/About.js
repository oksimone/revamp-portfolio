import React from "react";
import "../About/About.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header2";
import self from '../About/self.JPG'
import Arrow from '../../components/Arrow/Arrow'
import ksw_webdevresume from '../About/ksw_webdevresume.pdf'

// import Particles from '../../components/ParticlesBg'

function About() {
  return (
      <>
    <Container fluid>
      <Row>
        <Col lg = {12}>
          <Header />
        </Col>
      </Row>
      </Container>

      <Container>
      <Row style = {{marginTop: "12%"}}>
          <Col md = {6}>
              <img src = {self} style = {{height: "330px", width: "220px" }} alt="portrait of kristian" />
          </Col>
          <Col md = {6}>
              <p style = {{color:"white"}}>
              Hi there! Welcome to my portfolio! My name is Kristian Worthy, and
            I'm enrolled in UNC Charlotte's Full Stack Web Development Bootcamp
            to become a Full-Stack web developer. This portfolio showcases the
            projects I've worked on and assignments that I want to show off!
            Have a look around, and if you like what you see, use one of the links down below to contact me!

              </p>
              <p style = {{color:"white"}}>- Kristian</p>
          </Col>
          
      </Row>
      
    </Container>

    <Container fluid className = "container" style = {{display:"flex", justifyContent:"center"}}>
    <div className = "justify-content-center">
      <Row style = {{border:"1px solid white"}}>
        <Col md = {12}> 
        
        <a href = "https://www.linkedin.com/in/ksworthy/">
        <i class="fab fa-linkedin-in fa-2x" style = {{color:"white"}}></i>
        </a>
        <a href = "https://github.com/oksimone">
        <i class="fab fa-github fa-2x" style = {{color:"white"}}></i>
        </a>
        <a href = {ksw_webdevresume} target = "_blank">
        <i class="far fa-file-pdf fa-2x"  style = {{color:"white"}}></i>
        </a>

        <a href = "mailto:ksworthy@windstream.net">
        <i class="fas fa-at fa-2x" style = {{color:"white"}}></i>

        </a>
        </Col>
       
      </Row>
      </div>
      </Container>
    </>
  );
}

export default About;
