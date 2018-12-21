import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import logo from "../assets/logo_white.png"


const styles = {
    appBar: {
        background: 'linear-gradient(45deg, #60c36f, #337dc9)',
        height: 100,
        width: "100%",
        margin: 0,
        display: "flex",
        alignItems: "center"
    },
    logo: {
        height: 100,
        width: "auto",
        marginTop: 10
    }
  };


class Header extends Component {
  render() {
      const { classes } = this.props;
    return (
      <div className="Header">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
              <img src={logo} alt="logo oko" className={classes.logo}/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
