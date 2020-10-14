import React from "react";
import { Container, Row, Col, button } from "react-bootstrap";
import "../ArrowLeft/ArrowLeft.css";

function ArrowLeft() {
  return (
    <Container fluid className="body">
      <Row style = {{flexDirection: "row-reverse"}}>
        <Col md={6}>
          <div>
            <h6
              style={{
                color: "white",
                fontSize: "10px",
                // flexDirection: "column-reverse",
              }}
            >
              view projects
            </h6>
          </div>
        </Col>
        <Col md={6}>
          <div className="arrows-container">
            <a href="/projects">
              <div className="arrow2 arrow-one"></div>
              <div className="arrow2 arrow-two"></div>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default ArrowLeft;
