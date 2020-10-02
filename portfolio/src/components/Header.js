import React from 'react';
import {Row, Container, Col} from 'react-bootstrap'

const Styles = {
    marginTop: '90px',
    // border: "1px solid #C57ED3",
    opacity: "0.5",
    fontSize: '28px',
    marginLeft: '100px',    
}

function Header (){
    return(

  <Container>
  <Row className = 'justify-content-center'>
  <Col >
    <h1 style = {Styles}>Welcome to Kristian's Portfolio</h1>
    </Col>
    </Row>
  </Container>

    )
}

export default Header;