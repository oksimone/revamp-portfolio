import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import "../About/About.css";
import self from "../About/self.JPG";

function About() {
    return (
        <MDBContainer className="container">
        <div id="about"></div>
      
      <MDBRow>
        <MDBCol md="6" sm="6">
          <h2>About Kristian</h2>
          <img src={self} style={{ height: "330px", width: "220px" }} />
        </MDBCol>

        <MDBCol md="6" sm="6" className="aboutText">
          <p>
            Hi there! Welcome to my portfolio! My name is Kristian Worthy, and
            I'm enrolled in UNC Charlotte's Full Stack Web Development Bootcamp
            to become a Full-Stack web developer. This portfolio showcases the
            projects I've worked on and assignments that I want to show off!
            Have a look around and email me if you'd like to connect! Please
            navigate to the navbar to view my My Github, LinkedIn, and resume!
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default About;
