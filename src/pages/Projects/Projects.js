import React from "react";
import "../Projects/Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header3";
import cocktellme from "../Projects/cocktellme.png";
import goodburger from "../Projects/goodburger.png";
import image from "../Projects/image.png";
import "../Projects/Projects.css";

// import Particles from '../../components/ParticlesBg'

function About() {
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>

      <Container className=" container container2 ">
        <Row>
          <Col>
            <h3>CockTellMe - Project 1</h3>
            <h6> <a href = "https://oksimone.github.io/cocktellme/"> Deployed site </a>
           </h6>
           <h6> <a href = "https://github.com/oksimone/cocktellme"> Github </a>
           </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              fluid
              src={cocktellme}
              style={{ height: "auto", width: "420px" }}
              alt="portrait of kristian"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Pandemic Playlist - Project 2</h3>
            <h6> <a href = "https://thawing-beyond-59803.herokuapp.com/"> Deployed site </a>
           </h6>
           <h6> <a href = "https://github.com/oksimone/project2"> Github </a>
           </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              fluid
              src={image}
              style={{ height: "auto", width: "420px" }}
              alt="portrait of kristian"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Goodburger - Assignment</h3>
            <h6> <a href = "https://peaceful-ocean-64199.herokuapp.com/"> Deployed site </a>
           </h6>
           <h6> <a href = "https://github.com/oksimone/burger"
           > Github </a>
           </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              fluid
              src={goodburger}
              style={{ height: "auto", width: "420px" }}
              alt="portrait of kristian"
            />
          </Col>
        </Row>
       <Row style = {{border: "1px solid black", color: "white", marginTop:"20px"}}>
         <Col>
<h4>To view more, please visit my <a href = "https://github.com/oksimone"> Github </a>
</h4>
         </Col>
       </Row>
      </Container>
    </div>
  );
}

export default About;
