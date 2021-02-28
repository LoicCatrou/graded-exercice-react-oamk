import React from 'react';
import { StyleSheet, View } from 'react-native';
import Auth from './components/Auth'

let output;

export default function App() {
  output = (
    <View style={styles.container}>
      <Auth apiURI='https://graded-exercice-api-oamk.herokuapp.com'></Auth>
    </View>
  )

  return output;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 18
  }
});

