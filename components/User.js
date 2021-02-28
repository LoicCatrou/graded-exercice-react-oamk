import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import View1 from './UserInfosView'

const Stack = createStackNavigator();

export default class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    } ;   
  };

  componentDidMount() {
    fetch(this.props.apiURI + '/users', {
      method: 'GET'
    })
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
      }
      return response.json();
    })
    .then(json => {
      console.log("Users GET successful")
      console.log("Received following JSON");
      const user = json.find(u => u.username == this.props.name);

      this.props.receiveUser(user);

      this.setState({ users: user});
    })
    .catch(error => {
      console.log("Error message:")
      console.log(error.message)
    });
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Your page">
          { props => <View1 {...props} user={ this.state.users } onLogout={ this.props.onLogout }/>}
        </Stack.Screen>
      </Stack.Navigator>
    )
  }
}