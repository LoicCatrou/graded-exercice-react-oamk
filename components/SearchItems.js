import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchItemsView from './SearchItemsView'

const Stack = createStackNavigator();

export default class SearchItems extends Component {

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
      console.log(json);

      this.setState({ items: json});
    })
    .catch(error => {
      console.log("Error message:");
      console.log(error.message);
    });
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Items">
          { props => <SearchItemsView {...props} givenItem={ this.state.items } />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}