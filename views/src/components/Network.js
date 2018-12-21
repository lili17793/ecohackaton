import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import "./Networks.css";

const styles = {
  gridIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  imgIcon: {
    height: "3em",
    width: "auto"
  }
};

class Networks extends Component {
  state = {
    paths: ["black_and_white", "color"],
    index: this.props.indexPath
  };

  handleClick = () => {
    const { index } = this.state;
    this.setState({
        index: index ? 0 : 1
    });
  };

  render() {
    const { classes, name } = this.props;
    const { paths, index } = this.state;
    return (
      <Grid item xs={4} className={classes.gridIcon}>
        <IconButton color="inherit" onClick={this.handleClick}>
          <img
            src={require(`../assets/app_icons/${paths[index]}/${name}.png`)}
            alt={name}
            className={classes.imgIcon}
          />
        </IconButton>
      </Grid>
    );
  }
}

export default withStyles(styles)(Networks);
