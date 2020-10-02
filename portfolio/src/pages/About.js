import React from "react";
import { Row, Container, Col, Jumbotron } from "react-bootstrap";
import self from '../assets/self.JPG'



function About() {
  return (
    
    <Container>
    <Row>
    <Col >
      <img src={self} width = "150px" height = "250px" alt="Picture of Kristian" />
</Col>
<Col >
      <p>
        Hi there! Welcome to my portfolio! My name is Kristian Worthy, and I'm
        enrolled in UNC Charlotte's Full Stack Web Development Bootcamp to
        become a Full-Stack web developer. This portfolio showcases the projects
        I've worked on and assignments that I want to show off! Have a look
        around and email me if you'd like to connect! Please navigate to the
        navbar to view my My Github, LinkedIn, and resume!
      </p>
      </Col>
      </Row>
    </Container>
  );
}

export default About;
