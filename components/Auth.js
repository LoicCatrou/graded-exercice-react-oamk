import React, { Component } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as SecureStore from 'expo-secure-store'

import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import SignUpCompleted from './SignUpCompleted'
import LoadingScreen from './LoadingScreen'
import User from './User'
import MainView from './MainPage'
import Item from './UserItems'
import SearchItems from './SearchItems'
import AddItem from './AddItem'
import DeleteItem from './DeleteItem'
import UpdateItem from './UpdateItem'

const Stack = createStackNavigator();
const secureStoreTokenName = "demoAppJWT2";

export default class Auth extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCheckingTokenStorage: true,
      activeJWT: null,
      userName: null,
      logUser : null
    };
  };
  
  componentDidMount() {
    SecureStore.getItemAsync(secureStoreTokenName)
      .then(response => {
        console.log("SecureStore.getItemAsync success")    ;    
        this.setState({ activeJWT: response, isCheckingTokenStorage: false });
      })
      .catch(error => {
        console.log("SecureStore.getItemAsync error");
        console.log(error);
      });
  }
  
  onLoginReceiveJWT = (responseJWT, user) => {
    SecureStore.setItemAsync(secureStoreTokenName, responseJWT)
      .then(response => {
        this.setState({ activeJWT: responseJWT, isCheckingTokenStorage: false, userName: user })
      });    
  }
  
  receiveUser = (givenUser) => {
    this.setState({logUser: givenUser});
  }  
  
  authLogic = () => {
    const authScreens = (
      <>
        <Stack.Screen name="MainView" options={{headerShown: false}}>
          { props => <MainView {...props} apiURI={ this.props.apiURI }></MainView> }
        </Stack.Screen>
        <Stack.Screen name="SearchItems" options={{ headerShown: false}}>
          { props => <SearchItems {...props} apiURI={ this.props.apiURI }></SearchItems> }
        </Stack.Screen>
        <Stack.Screen name="Login" options={{ headerShown: false}}>
          { props => <LoginScreen {...props} onLoginReceiveJWT={ this.onLoginReceiveJWT } apiURI={ this.props.apiURI }></LoginScreen> }
        </Stack.Screen>
        <Stack.Screen name="Signup" options={{ headerShown: false}}>
          { props => <SignUpScreen {...props} apiURI={ this.props.apiURI }></SignUpScreen>}
        </Stack.Screen>
        <Stack.Screen name="SignupCompleted" options={{headerShown: false}}>
          { props => <SignUpCompleted {...props}></SignUpCompleted>}
        </Stack.Screen>
      </>
    )
  
    const app = (
      <>  
        <Stack.Screen name="User" options={{headerShown: false}}>
          { props => <User {...props} jwt={ this.state.activeJWT } apiURI={ this.props.apiURI } onLogout={ this.onLogout } name={ this.state.userName} receiveUser={ this.receiveUser }></User>}
        </Stack.Screen>
        <Stack.Screen name="SearchItems" options={{headerShown: false}}>
          { props => <SearchItems {...props} apiURI={ this.props.apiURI }></SearchItems> }
        </Stack.Screen>
        <Stack.Screen name="Item" options={{headerShown: false}}>
          { props => <Item {...props} jwt={ this.state.activeJWT } apiURI={ this.props.apiURI } name={ this.state.userName}></Item> }
        </Stack.Screen>
        <Stack.Screen name="AddItem" options={{headerShown: false}}>
          { props => <AddItem {...props} jwt={ this.state.activeJWT } apiURI={ this.props.apiURI } givenSeller={this.state.logUser}></AddItem> }
        </Stack.Screen>
        <Stack.Screen name="UpdateItem" options={{headerShown: false}}>
          { props => <UpdateItem {...props} jwt={ this.state.activeJWT } apiURI={ this.props.apiURI } givenUser={this.state.logUser}></UpdateItem> }
        </Stack.Screen>
        <Stack.Screen name="DeleteItem" options={{headerShown: false}}>
          { props => <DeleteItem {...props} jwt={ this.state.activeJWT } apiURI={ this.props.apiURI } givenUser={this.state.logUser}></DeleteItem> }
        </Stack.Screen>
      </>
    );
  
    const checkingForTokenStorage = (
      <Stack.Screen name="Loading" component={LoadingScreen} />
    );
  
    if(this.state.isCheckingTokenStorage) {
      console.log('Checking is token stored');
      return checkingForTokenStorage;
    }
    else {
      if(this.state.activeJWT != null) {
        console.log('JWT Token found, displaying application logged in views');
        return app;
      }
      else {
        console.log('JWT Token not found, displaying application authentication views');
        return authScreens;
      }
      console.error('Incorrect authLogic function processing');
    }
  }
  
    onLogout = () => {
      console.log("Logout clicked");
      this.setState({ activeJWT: null });
      SecureStore.deleteItemAsync(secureStoreTokenName);
    }
  
    render() {
      return (
        <View style={{ flex: 1}}>
          <NavigationContainer>
            <Stack.Navigator>
              { this.authLogic() }
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      );
    }
}