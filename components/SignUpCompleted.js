import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const SignUpCompleted = (props) => {

  return (
    <View style={ styles.screen }>
      <Text style={ styles.header }>Sign up completed</Text>
      <Button title="Proceed to login" onPress={ () => props.navigation.reset({index: 0, routes: [{ name: 'Login' }]})}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'rgb(227, 178, 0)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    color: 'white'
  }
});


export default SignUpCompleted