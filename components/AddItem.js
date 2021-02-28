import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'

const AddItem = (props) => {

  const [title, setTitle] = useState("Product test");
  const [description, setDescription] = useState("This is the description of a test product");
  const [category, setCategory] = useState("Home");
  const [address, setAddress] = useState("58 street of the testing product");
  const [city, setCity] = useState("TestTown, 89754");
  const [country, setCountry] = useState("Test Country");
  const [image, setImage] = useState("Empty");
  const [price, setPrice] = useState("59.99");
  const [deliveryType, setDeliveryType] = useState("Shipping");

  function AddButtonPressed(){
    fetch(props.apiURI + '/items', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        description: description,
        category: category,
        address : address,
        city: city,
        country: country,
        image: null,
        price: price,
        deliveryType: deliveryType
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": "Bearer " + props.jwt
      }
    })
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
      }
      return props.navigation.reset({index: 0, routes: [{ name: 'User' }]});
    })
    .catch(error => {
      console.log("Error message:");
      console.log(error.message);
    });
  }

  return (
    <View style={ styles.screen }>
      <ScrollView>
        <Text style={ styles.header }>Add a new item</Text>
        <Text>Please enter a title</Text>
        <TextInput style={ styles.input } value={ title } onChangeText={ value => setTitle(value)}/>
        <Text>Please enter a description</Text>
        <TextInput style={ styles.input } value={ description } onChangeText={ value => setDescription(value)}/>
        <Text>Please enter a category</Text>
        <TextInput style={ styles.input } value={ category } onChangeText={ value => setCategory(value)}/>
        <Text>Please enter an address</Text>
        <TextInput style={ styles.input } value={ address } onChangeText={ value => setAddress(value)}/>
        <Text>Please enter a city and postal code</Text>
        <TextInput style={ styles.input } value={ city } onChangeText={ value => setCity(value)}/>
        <Text>Please enter a country</Text>
        <TextInput style={ styles.input } value={ country } onChangeText={ value => setCountry(value)}/>
        <Text>Please enter images</Text>
        <TextInput style={ styles.input } value={ image } onChangeText={ value => setImage(value)} />
        <Text>Please enter a price</Text>
        <TextInput style={ styles.input } value={ price } onChangeText={ value => setPrice(value)}/>
        <Text>Please enter a delivery type</Text>
        <TextInput style={ styles.input } value={ deliveryType } onChangeText={ value => setDeliveryType(value)}/>
        <TouchableOpacity style={ styles.buttonAdd } onPress={ () => AddButtonPressed() }>
          <Text style={ styles.primaryButtonText }>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancel} onPress={() => props.navigation.reset({index: 0, routes: [{ name: 'User' }]})}>
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
  buttonAdd: {
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


export default AddItem