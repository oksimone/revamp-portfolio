import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import Projects from './pages/Projects/Projects'
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
      {/* <Nav />
      <Home /> */}
    </div>
  );
}

export default App;
