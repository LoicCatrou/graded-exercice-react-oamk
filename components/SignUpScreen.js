import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'

const SignUpScreen = (props) => {

  const [username, setUsername] = useState("MuscuMan14");
  const [firstName, setFirstName] = useState("Valentin");
  const [lastName, setLastName] = useState("Bot");
  const [dateOfBirth, setDateOfBirth] = useState("1997-06-05");
  const [address, setAddress] = useState("58 rue du paradis");
  const [city, setCity] = useState("Rennes, 35000");
  const [country, setCountry] = useState("France");
  const [email, setEmail] = useState("valentinbg.bot@hotmail.com");
  const [phoneNumber, setPhoneNumber] = useState("0789457814");
  const [password, setPassword] = useState("12345678");

  function signupPressed() {
    fetch(props.apiURI + '/users', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        firstName: firstName,
        lastName: lastName,
        dateOfBirth : dateOfBirth,
        address: address,
        city: city,
        country: country,
        email: email,
        phoneNumber: phoneNumber,
        password: password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
      }
      return response.json();
      })
    .then(json => {props.navigation.reset({index: 0, routes: [{ name: 'SignupCompleted' }]})})
    .catch(error => {
      console.log("Error message:");
      console.log(error.message);
    })
  }

  return (
    <View style={ styles.screen }>
      <ScrollView style={ styles.info }>
        <Text style={ styles.header }>Create an account</Text>
        <Text>Please enter your username</Text>
        <TextInput style={ styles.input } value={ username } onChangeText={ value => setUsername(value)}/>
        <Text>Please enter your first name</Text>
        <TextInput style={ styles.input } value={ firstName } onChangeText={ value => setFirstName(value)}/>
        <Text>Please enter your last name</Text>
        <TextInput style={ styles.input } value={ lastName } onChangeText={ value => setLastName(value)}/>
        <Text>Please enter your date of birth</Text>
        <TextInput style={ styles.input } value={ dateOfBirth } onChangeText={ value => setDateOfBirth(value)}/>
        <Text>Please enter your address</Text>
        <TextInput style={ styles.input } value={ address } onChangeText={ value => setAddress(value)}/>
        <Text>Please enter your city and postal code</Text>
        <TextInput style={ styles.input } value={ city } onChangeText={ value => setCity(value)}/>
        <Text>Please enter your country</Text>
        <TextInput style={ styles.input } value={ country } onChangeText={ value => setCountry(value)}/>
        <Text>Please enter your email</Text>
        <TextInput style={ styles.input } value={ email } onChangeText={ value => setEmail(value)}/>
        <Text>Please enter your phoneNumber</Text>
        <TextInput style={ styles.input } value={ phoneNumber } onChangeText={ value => setPhoneNumber(value)}/>
        <Text>Please enter your password</Text>
        <TextInput style={ styles.input } value={ password } onChangeText={ value => setPassword(value)}/>
        <TouchableOpacity style={styles.buttonSignUp} onPress={ () => signupPressed() }>
          <Text style={ styles.primaryButtonText }>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancel} onPress={() => props.navigation.reset({index: 0, routes: [{ name: 'MainView' }]})}>
          <Text style={styles.primaryButtonText} >Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  info: {
    width: "80%",
    height: "100%",
    display: "flex"
   },
  header: {
    fontSize: 40,
    marginBottom: 20,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20
  },
  buttonCancel: {
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
    color: 'white',
  }
});


export default SignUpScreen