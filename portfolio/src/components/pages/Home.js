import React from "react";
import TypeIt from './TypeIt'
import {Container} from 'react-bootstrap'

function Home() {
  return (
    // not sure if i need the container 
     <Container>
    <div>
      <div className="parallax">
      <TypeIt/>
      </div>

      {/* <div class="arrow bounce">
  <a class="fa fa-arrow-down fa-2x" href="#"></a>
</div> */}

      <div class="overlay">
        <h1>About me</h1>
      </div>
      <div class="parallax"></div>
		<div class="overlay">
			<h1>Project Section.</h1>
			<p>Isn't it neat?</p>
		</div>
		<div class="parallax"></div>
     
    </div>
    </Container>
  );
}

export default Home;
