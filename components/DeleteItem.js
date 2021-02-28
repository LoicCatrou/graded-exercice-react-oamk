import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'

const DeleteItem = (props) => {

  const [itemToDelete, setItemToDelete] = useState("1");

  function deletePressed() {
    fetch(props.apiURI + '/items/'+itemToDelete, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": "Bearer " + props.jwt
      }
    })
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
      }
      return props.navigation.reset({
          index: 0,
          routes: [{ name: 'User' }],
        });
    })
    .catch(error => {
      console.log("Error message:")
      console.log(error.message)
    });
  }

  return (
    <View style={ styles.screen }>
      <ScrollView>
        <Text style={ styles.header }>Delete an item</Text>
        <Text>Please enter the reference of the item</Text>
        <TextInput style={ styles.input } value={ itemToDelete } onChangeText={ value => setItemToDelete(value)}/>
        <TouchableOpacity style={ styles.buttonDelete } onPress={ () => deletePressed() }>
          <Text style={ styles.primaryButtonText }>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancel}onPress={() => props.navigation.reset({index: 0, routes: [{ name: 'User' }]})}>
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
  header: {
    fontSize: 40,
    marginBottom: 20,
    color: 'black'
  },
  text: {
    fontSize: 20,
    color: 'white'
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
  buttonDelete: {
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


export default DeleteItem