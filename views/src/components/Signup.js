import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import logoColor from "../assets/logo_color.png";
import { Link } from "react-router-dom";

const styles = theme => ({
  signup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  logo: {
    height: 110,
    width: "auto",
    marginTop: 60
    // border: "2px solid pink"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 230
    // border: "1px solid pink"
  },
  dense: {
    marginTop: 19
  },
  connectionFields: {
    display: "flex",
    flexDirection: "column"
  },
  menu: {
    width: 200
  },
  connectionButtons: {
    display: "flex",
    flexDirection: "column",
    marginTop: 45
  },
  link: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20
  },
  backToHome: {
    color: "grey"
  }
});

class Signup extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.signup}>
        <img src={logoColor} alt="logo oko" className={classes.logo} />
        <div className={classes.connectionFields}>
          <TextField
            id="pseudoField"
            label="Pseudo"
            placeholder="Mon pseudo"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="emailField"
            label="Email"
            placeholder="mon@email.com"
            className={classes.textField}
            margin="normal"
            type="email"
          />
          <TextField
            id="passwordField"
            label="Mot de passe"
            placeholder="Mon mot de passe"
            className={classes.textField}
            margin="normal"
            type="password"
          />
          <TextField
            id="verifyPasswordField"
            label="Confirmer le mot de passe"
            placeholder="Mon mot de passe"
            className={classes.textField}
            margin="normal"
            type="password"
          />
        </div>
        <div className={classes.connectionButtons}>
          <Button>Je m'inscris</Button>
        </div>
        <div className={classes.link}>
          <Link to="\networks" className={classes.navLink}>
            <p className={classes.backToHome}>Revenir à la page d'accueil</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Signup);
