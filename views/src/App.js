import React, { Component } from "react";
import { Route } from 'react-router-dom';
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
import Signin from "./components/Signin";

library.add(faHome, faCrown, faEllipsisH);

const primaryBackground = "linear-gradient(45deg, #60c36f, #337dc9)";

const theme = createMuiTheme({
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

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          {/* <AppBarHeader /> */}
          <Route exact path="/connexion" component={Signin} />
          {/* <Route exact path="/inscription" component={Signup} /> */}
          {/* <AppBarFooter /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
