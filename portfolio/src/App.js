import React from 'react';
import './App.css';
import Home from './components/pages/Home'
import NavBar from './components/NavBar'
import {Container} from 'react-bootstrap'



function App() {
  return (
    <div className="App">
 <NavBar/>
 <Container>
      <Home/>
      </Container>
    </div>
  );
}

export default App;
