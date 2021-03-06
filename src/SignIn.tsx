import React, { Component } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";


import { goHome, goToForgotPassword } from "./navigation";

export default class Login extends Component {
  static get options() {
    return {
      topBar: {
        visible: false, // need to set this because screens in a stack navigation have a header by default
      },
    };
  }

  state = {
    username: "",
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Enter username</Text>
              <TextInput
                onChangeText={(username) => this.setState({ username })}
                style={styles.textInput}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Enter password</Text>
              <TextInput
                onChangeText={(username) => this.setState({ username })}
                style={styles.textInput}
              />
            </View>

            <Button  title="Login" color="#0064e1" onPress={goHome}  />

            <TouchableOpacity onPress={goToForgotPassword}>
              <View >
                <Text >Forgot Password</Text>
              </View>
            </TouchableOpacity>
        
        </View>
      </View>
    );
  }

  // next: add login code
}
//

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  fieldContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
  },
  textInput: {
    width:280,
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#eaeaea",
    padding: 5,
  },
  button:{
    width:280,
    flex:1,
  }
});