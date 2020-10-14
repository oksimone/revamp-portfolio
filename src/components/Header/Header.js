import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "../Header/Header.css";
import ParticlesBg from "../ParticlesBg";
import NavBar from "../Nav/Nav";
import Arrow from '../Arrow/Arrow'

const Header = () => {
  return (
    <>
      <NavBar  />
      <br/>
      <Container className="header">
        <Row>
          <Col size = "sm">
            <p
              style={{
                alignSelf: "center",
                border: "1px solid black",
                fontSize: "35px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              WELCOME TO KRISTIAN'S PORTFOLIO 
              
{/* <span>&#10230;</span> */}

            </p>
          </Col>
        </Row>
      </Container>
      {/* <ParticlesBg /> */}
   
    </>
  );
};

export default Header;
