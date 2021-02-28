import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const MainView = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonLogin} onPress={ () => props.navigation.navigate('Login') }>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSignUp} onPress={ () => props.navigation.navigate('Signup') }>
        <Text style={styles.text}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={ () => props.navigation.navigate('SearchItems') }>
        <Text style={styles.text}>All items</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: "center",
    paddingTop: 25,
    backgroundColor: '#F3F3F3'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#3C1874",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 9.5,
    paddingRight: 9.5,
    borderRadius: 5
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
  text: {
    color : '#FFFFFF'
  }
});

export default MainView