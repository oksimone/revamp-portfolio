import React from "react";

import "./App.css";
// import { render } from "react-dom";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home'
// import { BrowserRouter as Router } from "react-router-dom";
// import ParticlesBg from "./components/ParticlesBg";
// import NavBar from "./components/Nav/Nav";
// import { Container, Row, Col } from "react-bootstrap";
// import Header from "./components/Header/Header";
// import Particles from "react-particles-js";
// import Arrow from "./components/Arrow/Arrow";

import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects"

// const style = {
//   root: {
//     textAlign: "center",
//     // height:"100%",
//     // background:"blue",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// };

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
            </div>
);
  }

      {/* <Container fluid style={style}>
        <Row>
          <Col>
            <Header />

            <ParticlesBg />
            {/* <h6>view next page</h6> */}
          // </Col>

      //     <Col>
      //       <Arrow style={{ justifyContent: "flex-start" }} />
      //     </Col>
      //   </Row>
      // </Container> */}
     


// render(<App />, document.getElementById("root"));

export default App;
