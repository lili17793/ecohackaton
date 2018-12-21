import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import networkIcon from "../assets/network_icon.png"

const iconSize = "1em"

const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    margin: 0,
  },
  appBar: {
    background: "linear-gradient(45deg, #60c36f, #337dc9)",
    height: 60,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  toolBar: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  imgIcon: {
    height: iconSize,
    width: "auto",
  },
  buttonIcon: {
    fontSize: iconSize,
    color: "white"
  }
};

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton color="inherit">
              <span className={classes.buttonIcon}>
                <FontAwesomeIcon icon="home" />
              </span>
            </IconButton>
            <IconButton color="inherit">
              <span className={classes.buttonIcon}>
                <FontAwesomeIcon icon="crown" />
              </span>
            </IconButton>
            <IconButton color="inherit">
                <img src={networkIcon} alt="Bouton réseau" className={classes.imgIcon}/>
            </IconButton>
            <IconButton color="inherit">
              <span className={classes.buttonIcon}>
                <FontAwesomeIcon icon="ellipsis-h" />
              </span>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
