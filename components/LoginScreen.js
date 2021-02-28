import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Base64 } from 'js-base64'



const LoginScreen = (props) => {

  const [userName, setUserName] = useState("FrancoisBLA");
  const [password, setPassword] = useState("12345678");

  function loginClick() {
    fetch(props.apiURI + '/logins', {
      method: 'GET',
      headers: {
        "Authorization": "Basic " + Base64.encode(userName + ":" + password)
      }
    })
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
      }
      return response.json();
    })
    .then(json => {
      console.log("Login successful");
      console.log("Received following JSON");
      console.log(json);

      props.onLoginReceiveJWT(json.token, userName);
    })
    .catch(error => {
      console.log("Error message:");
      console.log(error.message);
    })
  }

  return (
    <View style={ styles.screen }>
      <Text style={ styles.header }>User Login</Text>
      <Text style={ styles.text }>Username</Text>
      <TextInput style={ styles.input } value={ userName } onChangeText={ value => setUserName(value)}/>
      <Text style={ styles.text }>Password</Text>
      <TextInput style={ styles.input } value={ password } onChangeText={ value => setPassword(value)}/>
      <TouchableOpacity style={ styles.buttonLogin } onPress={ () => loginClick() }><Text style={ styles.primaryButtonText }>Login</Text></TouchableOpacity>
      <TouchableOpacity style={ styles.buttonSignUp } onPress={ () => props.navigation.navigate('Signup') }><Text style={ styles.primaryButtonText }>SignUp</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF"
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    color: 'white'
  },
  text: {
    fontSize: 20,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: '60%',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20
  },
  buttonLogin: {
    alignItems: "center",
    backgroundColor: "#3C1874",
    paddingLeft: 19.2,
    paddingRight: 19.2,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
    borderRadius: 5
  },
  buttonSignUp: {
    alignItems: "center",
    backgroundColor: "#3C1874",
    paddingLeft: 14.5,
    paddingRight: 14.5,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
    borderRadius: 5
  },
  primaryButtonText: {
    color: '#FFFFFF',
  }
});

export default LoginScreen