import React from "react";
import "../Home/Home.css";
import { Grid } from "@material-ui/core";
import KRIS from "../Home/KRIS.JPG";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

function Home() {
  return (
    
    <Grid container fluid className="container">
      <Nav />
     
      <Header className="header" />

      <img className = "img"
        src={KRIS}
        
        alt="portrait of kristian"
      />
    </Grid>
  );
}

export default Home;
