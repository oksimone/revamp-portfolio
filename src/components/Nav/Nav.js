import React, { Component } from "react";
import { Breadcrumbs, Link, Grid } from "@material-ui/core";
import "../Nav/Nav.css";
import logo from "../Nav/logo.png";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  // handleClick(e) {
  //     e.preventDefault()
  //     console.log('this is:', this);
  //   }

  render() {
    return (
      <div className="nav">
        <Grid container fixed justify="center" alignItems="center">
          <img src={logo} style={{ height: "9%", width: "9%" }} />
          <Breadcrumbs aria-label="breadcrumb">
            <Link className="link" href="/home" onClick={this.handleClick}>
              oksimone
            </Link>
            <Link className="link" href="/about" onClick={this.handleClick}>
              about
            </Link>
            <Link className="link" href="/projects" onClick={this.handleClick}>
              projects
            </Link>
            {/* <Link
              className="link"
              href="twitter.com"
              onClick={this.handleClick}
            >
              contact
            </Link> */}
          </Breadcrumbs>
        </Grid>
        {/* </Grid> */}
      </div>
    );
  }
}

export default Nav;
