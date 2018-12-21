import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import AppBarHeader from "./AppBarHeader";
import AppBarFooter from "./AppBarFooter";

const styles = {
  imgIcon: {
    height: "3em",
    width: "auto"
  }
};

const apps = [
  "gmail",
  "outlook",
  "facebook",
  "instagram",
  "twitter",
  "snapchat",
  "youtube",
  "tiktok",
  "linkedin",
  "dailymotion",
  "netflix",
  "vimeo"
];

class Networks extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="Networks">
        <AppBarHeader />
        <Grid container spacing={8}>
          {apps.map((app, index) => (
            <Grid key={index} item xs={4}>
              <IconButton color="inherit">
                <img
                  src={require(`../assets/app_icons/black_and_white/${app}.png`)}
                  alt={app}
                  className={classes.imgIcon}
                />
              </IconButton>
            </Grid>
          ))}
        </Grid>
        <AppBarFooter />
      </div>
    );
  }
}

export default withStyles(styles)(Networks);
