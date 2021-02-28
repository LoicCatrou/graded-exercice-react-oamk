import React from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'

const View1 = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput style={{ fontSize: 24, fontWeight: '700' }} value={"Welcome back " + props.user.firstName +" "+ props.user.lastName}></TextInput>
      <Text>Here are your informations : </Text>
      <TextInput style={{ fontSize: 12, fontWeight: '700' }} value={"Username : " + props.user.username }></TextInput>
      <TextInput style={{ fontSize: 12, fontWeight: '700' }} value={"Date of birth : " + props.user.dateOfBirth }></TextInput>
      <TextInput style={{ fontSize: 12, fontWeight: '700' }} value={"Address : " + props.user.address }></TextInput>
      <TextInput style={{ fontSize: 12, fontWeight: '700' }} value={"City : " + props.user.city }></TextInput>
      <TextInput style={{ fontSize: 12, fontWeight: '700' }} value={"Country : " + props.user.country }></TextInput>
      <TextInput style={{ fontSize: 12, fontWeight: '700' }} value={"Email : " + props.user.email }></TextInput>
      <TextInput style={{ fontSize: 12, fontWeight: '700' }} value={"Phone number : " + props.user.phoneNumber }></TextInput>
      <TouchableOpacity style={ styles.buttonTop } onPress={ () => props.navigation.navigate('SearchItems') }>
        <Text style={styles.primaryButtonText}>View all items</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.button } onPress={ () => props.navigation.navigate('Item') }>
        <Text style={styles.primaryButtonText}>View my items</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.button } onPress={ () => props.navigation.navigate('AddItem') }>
        <Text style={styles.primaryButtonText}>Add a new item</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.button } onPress={ () => props.navigation.navigate('UpdateItem') }>
        <Text style={styles.primaryButtonText}>Update an item</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.button } onPress={ () => props.navigation.navigate('DeleteItem') }>
        <Text style={styles.primaryButtonText}>Delete an item</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.button } onPress={ props.onLogout }>
        <Text style={styles.primaryButtonText}>Logout</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonTop: {
    width: '35%',
    alignItems: "center",
    backgroundColor: "#3C1874",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:10
  },
  button: {
    width: '35%',
    alignItems: "center",
    backgroundColor: "#3C1874",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  primaryButtonText: {
    color: '#FFFFFF',
  }
});

export default View1