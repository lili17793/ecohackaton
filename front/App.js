import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  Image,
  ScrollView
} from "react-native";
import Signin from "./Signin";
import Signup from "./Signup";

// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";

// const stylesMaterial = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   input: {
//     display: 'none',
//   },
// });

export default class App extends React.Component {
  handleClick() {
    Alert.alert("Hey");
  }
  render() {
    return (
      <ScrollView
      style={styles.container}
      >
        <Signin />
        <Signup />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
    // alignItems: "center",
    // justifyContent: "center"
  }
});
