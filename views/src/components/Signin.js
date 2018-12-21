import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import logoColor from "../assets/logo_color.png";
import "./Signin.css";

const styles = theme => ({
  signin: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  logo: {
    height: 90,
    width: "auto",
    marginTop: 30,
    // border: "2px solid pink"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 230,
    // border: "1px solid pink"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  connectionButtons: {
    // border: "2px solid pink"
    display: "flex",
    flexDirection: "column",
    marginTop: 28,
    // alignItems: "center"
    // justifyContent: "center",
  },
  connectionButton: {
    marginBottom: 20,
    width: 230,
  },
  forgottenPassWordText: {
      color: "grey",
      
  }
});

class Signin extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.signin}>
        <img src={logoColor} alt="logo oko" className={classes.logo} />
        <TextField
          id="pseudoField"
          label="Pseudo"
          placeholder="Mon pseudo"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="passwordField"
          label="Mot de passe"
          placeholder="Mon mot de passe"
          className={classes.textField}
          margin="normal"
          type="password"
        />
        <div className={classes.connectionButtons}>
          <Button className={classes.connectionButton}>C'est parti !</Button>
          <Button className={classes.connectionButton}>Je m'inscris</Button>
        </div>
        <p className={classes.forgottenPassWordText}>Mot de passe oublié ?</p>
      </div>
    );
  }
}

export default withStyles(styles)(Signin);
