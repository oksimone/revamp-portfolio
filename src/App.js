import { MDBRow, MDBContainer } from 'mdbreact';
import React from 'react';
import './App.css';
import Background from './components/Background/Background';
import BrowserRouter from './components/Nav/Nav';
import About from './components/About/About';
import Middle from './components/MiddleMan/Middle';
import Projects from './components/Projects/Projects'




function App() {
  return (
    <div className="App">
    {/* <BrowserRouter/> */}
    <Background/>
    <About/>
    <Middle/>
    <MDBContainer style = {{display: "flex" ,justifyContent:"center"}}>

    <Projects/>
    </MDBContainer>
   
    

 

    
    </div>
  );
}

export default App;
