import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBarHeader from "./AppBarHeader";
import AppBarFooter from "./AppBarFooter";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import child from "../assets/Panda_2.png";

const styles = theme => ({
  reward: {
    width: 150,
    height: 200,
    marginTop: 70
  },
  text: {
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    textAlign: "center"
  }
});

class Reward extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.reward_container}>
        <AppBarHeader />
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid xs={12} item>
            <img className={classes.reward} alt="reward pic" src={child} />
          </Grid>
          <Grid xs={12} item>
            <Typography className={classes.text} variant="h5" component="h2">
              Félicitations !<br/><br/> Tu es passé niveau 2,<br/> Oko est fier de toi :)
            </Typography>
          </Grid>
        </Grid>
        <AppBarFooter />
      </div>
    );
  }
}

export default withStyles(styles)(Reward);
