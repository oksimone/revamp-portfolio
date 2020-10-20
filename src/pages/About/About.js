import React from "react";
import Nav from "../../components/Nav/Nav";
import "../About/About.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Nav />
        </Grid>
        <Grid item xs={12}>
          <h1 className="about">About Kristian</h1>
        </Grid>
        <Grid item xs={8}>
          <p>
            Kristian Worthy is a full-stack web developer with a primary focus
            on Front-End development. She graduated from UNC Charlotte's Coding:
            Full-Stack Web Development program and graduated from UNC Wilmington
            with a Bachelor of Arts degree in Communication Studies.
          </p>
        </Grid>
        <Grid item xs={8}>
          <p>
            If you like what you see, please contact me via
            <a href="mailto: ksworthy@windstream.net"> email </a>
            or through my
            <a href="https://www.linkedin.com/in/ksworthy/"> LinkedIn!</a>
          </p>
          <p>
            OR, please visit my
            <a href="https://github.com/oksimone"> GitHub </a>
            to view my repositories ☺{" "}
          </p>
        </Grid>
        {/* <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid> */}
      </Grid>
    </div>
  );
}

export default About;
