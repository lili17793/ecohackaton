import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  Image,
  TextInput
} from "react-native";

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

export default class Signing extends React.Component {
  handleClick() {
    Alert.alert("Vous êtes bien inscrit !");
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./assets/logo.jpg")}
          style={{ width: 193, height: 110 }}
        />
        <Text>Pseudo</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="MonPseudo"
          onChangeText={text => this.setState({ text })}
        />
        <Text>Email</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="monemail@gmail.com"
          onChangeText={text => this.setState({ text })}
          type="emailAddress"
        />
        <Text>Mot de passe</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="azerty"
          onChangeText={text => this.setState({ text })}
          textContentType="password"
        />
        <Text>Confirmation du mot de passe</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="azerty"
          onChangeText={text => this.setState({ text })}
          textContentType="password"
        />
        <Button 
          title="Inscription"
          onPress={this.handleClick}
          color="#2B86BB"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
