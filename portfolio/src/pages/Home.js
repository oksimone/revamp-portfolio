import React from "react";
import TypeIt from "../components/TypeIt";
import { Container } from "react-bootstrap";
import About from "./About";
import Project from "./Project"
import Header from "../components/Header"

const styles ={
  marginTop: "60%"
}
function Home() {
  return (
    // not sure if i need the container
    <Container>
      <div>
        <div className="parallax">
        <Header/>
          {/* <TypeIt /> */}
        </div>

        <div class="overlay">
          <h2 id="about">About</h2>
          <About/>
        </div>
        <div class="parallax"></div>
        <div class="overlay">
          <h2 id="work">Project Section</h2>
          <Project/>
        </div>
        <div class="parallax"></div>
        <div class="overlay">
          <h2 id="social">Socials</h2>
        </div>
        <div class="parallax"></div>
        <div class="overlay">
          <h2 id="contact">Contact</h2>
        </div>
        <div class="parallax"></div>
      </div>
    </Container>
  );
}

export default Home;
