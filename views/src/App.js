import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faCrown,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";
import AppBarHeader from "./components/AppBarHeader";
import AppBarFooter from "./components/AppBarFooter";
import Networks from "./components/Networks";
import "typeface-roboto";

library.add(faHome, faCrown, faEllipsisH);

const primaryBackground = "linear-gradient(45deg, #60c36f, #337dc9)";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiButton: {
      // Name of the component ⚛️ / style sheet
      text: {
        background: primaryBackground,
        color: "#fff" // Some CSS
      }
    }
  }
});

const styles = {
  frame: {
    marginTop: 150,
    marginBottom: 70
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBarHeader />
          {/* <div className={classes.frame}>
            <Networks />
          </div> */}
          <AppBarFooter />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
