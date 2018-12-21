import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import logo from "../assets/logo_white.png";
import { Link } from "react-router-dom";

const styles = {
  header: {
    position: "static",
    zIndex: 1,
    top: 0,
    width: "100%",
  },
  appBar: {
    background: "linear-gradient(45deg, #60c36f, #337dc9)",
    height: 90,
    width: "100%",
    margin: 0,
    display: "flex",
    alignItems: "center"
  },
  logo: {
    height: 90,
    width: "auto",
    marginTop: 10
  },
};

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <img src={logo} alt="logo oko" className={classes.logo} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
