import React from "react";
import { Container, Row, Col, button } from "react-bootstrap";
import "../Arrow/Arrow.css";

function Arrow() {
  return (
    <Container fluid className="body">
      <Row>
        <Col md={6}>
          <div>
            <h6
              style={{
                color: "white",
                fontSize: "10px",
                flexDirection: "column",
              }}
            >
              view about me
            </h6>
          </div>
        </Col>
        <Col md={6}>
          <div className="arrows-container">
            <a href="/about">
              <div className="arrow arrow-one"></div>
              <div className="arrow arrow-two"></div>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Arrow;
