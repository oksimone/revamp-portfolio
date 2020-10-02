import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import cocktellme from "../assets/cocktellme.png";
import goodburger from "../assets/goodburger.png";
import image from "../assets/image.png";

function Project() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          {" "}
          <img
            src={cocktellme}
            width="250px"
            height="150px"
            alt="Picture of Kristian"
          />
        </Col>
        <br />
        <Col xs={6} md={4}>
          {" "}
          <img
            src={cocktellme}
            width="250px"
            height="150px"
            alt="Picture of Kristian"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={6} md={4}>
          {" "}
          <img
            src={cocktellme}
            width="250px"
            height="150px"
            alt="Picture of Kristian"
          />
        </Col>
        <Col xs={6} md={4}>
          {" "}
          <img
            src={cocktellme}
            width="250px"
            height="150px"
            alt="Picture of Kristian"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
