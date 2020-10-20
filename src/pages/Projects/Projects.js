import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Nav from '../../components/Nav/Nav'
import project3 from '../Projects/project3.gif'
import PandemicPlaylist from '../Projects/PandemicPlaylist.gif'
import cocktellme from '../Projects/cocktellme.png'
import goodburger from '../Projects/goodburger.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Nav/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <h6>"fufulemon" AKA Saint George Athleisure</h6>
          <img
            src = {project3}
            style = {{height:"250px", width:"400px"}}
          />
          <p><strong>Description:</strong> Saint George is an react based, athleisure e-commerce site, providing fitness enthusiasts access to modern apparel and wellness to help them slay their dragon.</p>
          <p>view deployed site</p>
          <p>view github</p>
        </Grid>
        <Grid item xs={12} sm={6}>
        <h6>pandemic playlist</h6>
          <img
            src = {PandemicPlaylist}
            style = {{height:"250px", width:"430px"}}
          />
          <p><strong>Description:</strong> Pandemic Playlist curates a movie playlist based on the user's age and the genre they choose. It allows the user to add movies to their playlist, their favorites list, and it separates the films that you've watched or haven't watched</p>
          <p>view deployed site</p>
          <p>view github</p>
        </Grid>
        <Grid item xs={12} sm={6}>
        <h6>cocktellme</h6>
          <img
            src = {cocktellme}
            style = {{height:"250px", width:"400px"}}
          />
          <p><strong>Description:</strong> Cocktellme is an app that pairs the user with various cocktail drinks based on their personality traits!</p>
          <p>view deployed site</p>
          <p>view github</p>
        </Grid>
        <Grid item xs={12} sm={6}>
        <h6>goodburger with MVC</h6>
          <img
            src = {goodburger}
            style = {{height:"250px", width:"400px"}}
          />
          <p><strong>Description:</strong> For this small assignment, I created a burger logger with MySQL, Node.js, Express, Handlebars, and an ORM. The theme of the assignment was inspired by the movie "Good Burger."</p>
          <p>view deployed site</p>
          <p>view github</p>
        </Grid>
       
      </Grid>
    </div>
  );
}