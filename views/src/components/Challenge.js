import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Avatar,
  Typography
} from "@material-ui/core";
import AppBarHeader from "./AppBarHeader";
import AppBarFooter from "./AppBarFooter";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  cardHeader: {
    marginTop: 17,
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: "#60c36f",
    height: 30,
    width: 30,
    fontSize: 18,
    marginLeft: 20
  },
  challengeDuration: {
    color: "grey",
    fontSize: 13
  }
});

class Challenge extends Component {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <AppBarHeader /> */}
        <Grid container spacing={8} justify="center" className={classes.cardHeader}>
          <Grid item xs={10}>
            <Card className={classes.card}>
              <Grid container spacing={0} className={classes.cardHeader}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Défi du moment
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="p"
                    className={classes.challengeDuration}
                  >
                    Durée du défi : 1 journée
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    19
                  </Avatar>
                </Grid>
              </Grid>
              <CardContent>
                <Typography component="p">
                  Nettoie ta messagerie Gmail en t'inscrivant sur Cleanfox
                  https://www.cleanfox.io/fr-fr
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* <AppBarFooter /> */}
      </div>
    );
  }
}

Challenge.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Challenge);
