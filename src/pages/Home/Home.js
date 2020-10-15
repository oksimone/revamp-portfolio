import React from 'react'

import "../Home/Home.css";
import { render } from "react-dom";
// import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import ParticlesBg from "../../components/ParticlesBg";
// import NavBar from "./components/Nav/Nav";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Particles from "react-particles-js";
import Arrow from "../../components/Arrow/Arrow";
import ArrowLeft from "../../components/ArrowLeft/ArrowLeft"


const style = {
    root: {
      textAlign: "center",
      // height:"100%",
      // background:"blue",
      overflow:"hidden",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  
  function Home() {
    return (
      <div>

        <Container fluid style={style} >
          <Row>
            <Col>
              <Header  />
  
              <ParticlesBg />
              {/* <h6>view next page</h6> */}
            </Col>
  
            <Col>
              <ArrowLeft style={{ justifyContent: "flex-start" }} />
              
            </Col>
            <Col>
              <Arrow style={{ justifyContent: "flex-start" }} />
              
            </Col>
          </Row>
        </Container>
        </div>
   
    );
  }

  
  render(<Home />, document.getElementById("root"));

  export default Home

