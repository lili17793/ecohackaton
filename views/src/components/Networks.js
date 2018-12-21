import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import AppBarHeader from "./AppBarHeader";
import AppBarFooter from "./AppBarFooter";
import "./Networks.css"
import Network from "./Network";

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

const apps = [
  {
    name: "gmail",
    index: 1
  },
  {
    name: "outlook",
    index: 0
  },
  {
    name: "facebook",
    index: 1
  },
  {
    name: "instagram",
    index: 1
  },
  {
    name: "twitter",
    index: 1
  },
  {
    name: "snapchat",
    index: 1
  },
  {
    name: "youtube",
    index: 1
  },
  {
    name: "tiktok",
    index: 0
  },
  {
    name: "linkedin",
    index: 1
  },
  {
    name: "dailymotion",
    index: 0
  },
  {
    name: "netflix",
    index: 1
  },
  {
    name: "vimeo",
    index: 0
  },
];

class Networks extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className="Networks">
        <AppBarHeader />
        <Grid container spacing={8}>
          {apps.map((app, index) => (
            <Network key={index} name={app.name} indexPath={app.index}/>
          ))}
          <Grid item xs={12} className={classes.gridIcon}>
            <Typography variant="h6" className="typoGradient">
              Sélectionne tes réseaux :)
            </Typography>
          </Grid>
        </Grid>
        <AppBarFooter />
      </div>
    );
  }
}

export default withStyles(styles)(Networks);
