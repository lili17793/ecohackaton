import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faCrown,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";
import Networks from "./components/Networks";
import "typeface-roboto";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Challenge from "./components/Challenge";

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
  }
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Route exact path="/" component={Signin} />
          <Route exact path="/inscription" component={Signup} />
          <Route exact path="/networks" component={Networks}/>
          <Route exact path="/challenges" component={Challenge} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
