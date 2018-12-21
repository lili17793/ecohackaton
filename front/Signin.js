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

export default class Signin extends React.Component {
  handleClickConnection() {
    Alert.alert("Vous êtes bien connecté !");
  }

  handleClickGoLogin() {
    Alert.alert("Ok, c'est parti pour l'inscription !");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./assets/logo.jpg")}
          style={{ width: 193, height: 110 }}
        />
        <Text style={styles.textConnection}>Email</Text>
        <TextInput
          style={styles.inputConnection}
          placeholder="monemail@gmail.com"
          onChangeText={text => this.setState({ text })}
          type="emailAddress"
        />
        <Text style={styles.textConnection}>Mot de passe</Text>
        <TextInput
          style={styles.inputConnection}
          placeholder="azerty"
          onChangeText={text => this.setState({ text })}
          textContentType="password"
        />
        <Button
          title="Connexion"
          onPress={this.handleClickConnection}
          color="#2B86BB"
        />
        <View style={styles.buttonNotSuscribedYet}>
          <Button
            title="Je m'inscris !"
            onPress={this.handleClickGoLogin}
            color="#2B86BB"
          />
        </View>
        <Text style={styles.forgottenPassword}>Mot de passe oublié ?</Text>
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
  },
  buttonNotSuscribedYet: {
    marginTop: 10
  },
  forgottenPassword: {
    marginTop: 20,
    color: "#D3D3D3",
  },
  inputConnection: {
    height: 40,
    width: 275,
    // borderWidth: 1,
    // borderColor: "red",
    // borderStyle: "dashed"
    // border: '1px solid red'
  },
  textConnection: {
    width: 275,
    // borderWidth: 1,
    // borderColor: "blue",
    // borderStyle: "dashed"
    // border: '1px solid red'
  }
});
