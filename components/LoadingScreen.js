import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const LoadingScreen = () => {

  return (
    <View style={ styles.screen }>
      <ActivityIndicator size="large" color="#FFFFFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'rgb(51, 153, 255)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoadingScreen