import React from "react";
import { StyleSheet, Text, View, Alert, Button, Image, TextInput } from "react-native";

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
      <Image source={require('./assets/logo.jpg')} style={{width: 193, height: 110}}/>
        <Text>Email</Text>
        <TextInput
          style={{height: 40}}
          placeholder="monemail@gmail.com"
          onChangeText={(text) => this.setState({text})}
          type="emailAddress"
        />
        <Text>Mot de passe</Text>
        <TextInput
          style={{height: 40}}
          placeholder="azerty"
          onChangeText={(text) => this.setState({text})}
          textContentType="password"
        />
        <Button
          title="Connexion" 
          onPress={this.handleClickConnection}
          color="#2B86BB"
        />
        <Button
          title="Pas encore inscrit ?" 
          onPress={this.handleClickGoLogin}
          color="#2B86BB"
          style={{marginTop: "20px"}}
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
