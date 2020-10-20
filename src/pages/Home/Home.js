import React from "react";
import "../Home/Home.css";
import { Grid } from "@material-ui/core";
import KRIS from "../Home/KRIS.JPG";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

function Home() {
  return (
    <Grid container fixed className="container">
      <Nav />
     
      <Header className="header" />

      <img
        src={KRIS}
        style={{ height: "auto", maxWidth: "100%", opacity: "0.7",  overflowX:"hidden" }}
        alt="portrait of kristian"
      />
    </Grid>
  );
}

export default Home;
