import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ItemView from './UserItemsView'

const Stack = createStackNavigator();

export default class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch(this.props.apiURI + '/items', {
      method: 'GET'
    })
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
      }
      return response.json();
    })
    .then(json => {
      console.log("Users GET successful");
      console.log("Received following JSON");
      this.setState({items: json});
    })
    .catch(error => {
      console.log("Error message:");
      console.log(error.message);
    })
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="My items">
          { props => <ItemView {...props} givenName={ this.props.name } givenItems={ this.state.items } />}
        </Stack.Screen>
      </Stack.Navigator>
    )
  }
}