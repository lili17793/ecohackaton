import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBarHeader from "./AppBarHeader";
import AppBarFooter from "./AppBarFooter";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import baby from "../assets/Panda_1.png";

const styles = theme => ({
  reward: {
    width: 150,
    height: 200,
    marginTop: 50
  },
  text:{
    fontSize:20,
    margin:10,
    marginTop: 30,
    textAlign:"center"

  }
});

class Reward extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.reward_container}>
        <AppBarHeader />
        <Grid container  direction="column" justify="center" alignItems="center">
          <Grid xs={12} item>
            <img className={classes.reward} alt="reward pic" src={baby} />
          </Grid>
          <Grid xs={12} item>
            <Typography className={classes.text} variant="h5" component="h2">
              Félicitation pour ton inscription ! Ton score est de zéro point.
              Relève nos défis et fais évoluer Oko
            </Typography>
          </Grid>
        </Grid>
        <AppBarFooter />
      </div>
    );
  }
}

export default withStyles(styles)(Reward);
