import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import AppBarHeader from "./AppBarHeader";
import AppBarFooter from "./AppBarFooter";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Gmail from "../assets/app_icons/color/gmail.png";
import Snapchat from "../assets/app_icons/color/snapchat.png";
import "./Networks.css"

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  realizedChallenge: {
    color: "grey"
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
    marginBottom: 12
  },
  avatar: {
    backgroundColor: "#60c36f",
    height: 30,
    width: 30,
    fontSize: 18
  },
  networkIcon: {
    height: 27,
    width: 27
  },
  challengeDuration: {
    color: "grey",
    fontSize: 13
  },
  challengeValidationButton: {
    marginTop: 17,
    height: 13
  },
  description: {
    textAlign: "center"
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
        <AppBarHeader />
        <Grid
          container
          spacing={8}
          justify="center"
          className={classes.cardHeader}
        >
          <Grid item xs={10}>
            <Card className={classes.card}>
              <Grid container spacing={0} className={classes.cardHeader}>
                <Grid item xs={2} />
                <Grid item xs={8} className={classes.description}>
                  <Typography gutterBottom variant="h5" component="h2" className="typoGradient">
                    Défi du moment
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="p"
                    className={classes.challengeDuration}
                  >
                    Durée du défi : 1 semaine
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="p"
                    className={classes.challengeDuration}
                  >
                    Gagnez 19 points
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={Gmail}
                    alt="logo Gmail"
                    className={classes.networkIcon}
                  />
                  {/* <Avatar aria-label="Recipe" className={classes.avatar}>
                  19
                </Avatar> */}
                </Grid>
              </Grid>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography component="p">
                      Nettoie ta messagerie Gmail en t'inscrivant sur Cleanfox
                      https://www.cleanfox.io/fr-fr
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button className={classes.challengeValidationButton}>
                      Défi validé !
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* DEFI REALISE */}
        <Grid
          container
          spacing={8}
          justify="center"
          className={classes.cardHeader}
        >
          <Grid item xs={10}>
            <Card className={classes.card}>
              <Grid container className={classes.cardHeader}>
                <Grid item xs={2} />
                <Grid item xs={8} className={classes.description}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.realizedChallenge}
                  >
                    Défi validé
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="p"
                    className={classes.challengeDuration}
                  >
                    Durée du défi : 1 journée
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="p"
                    className={classes.challengeDuration}
                  >
                    12 points gagnés
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={Snapchat}
                    alt="logo Snapchat"
                    className={classes.networkIcon}
                  />
                </Grid>
              </Grid>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography
                      component="p"
                      className={classes.realizedChallenge}
                    >
                      Limite le nombre de tes stories à 5 par jour
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button className={classes.challengeValidationButton}>
                      Défi déjà validé !
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <AppBarFooter />
      </div>
    );
  }
}

Challenge.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Challenge);
