import React from "react";
import TypeIt from "../components/TypeIt";
import { Container } from "react-bootstrap";
import About from "./About";
import Project from "./Project"

function Home() {
  return (
    // not sure if i need the container
    <Container>
      <div>
        <div className="parallax">
          <TypeIt />
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
          <h2 id="work">Socials</h2>
          
        </div>
      </div>
    </Container>
  );
}

export default Home;
