import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemsView = (props) => {

  return (
    <View style={ styles.item }>
      <Text style={ styles.title }>{ props.title}</Text>
      <Text>{ props.description}</Text>
      <Text>{ 'Price : '+props.price}</Text>
      <Text style={ styles.title }>Product location</Text>
      <Text>{ props.address+" "+ props.city+" "+props.country}</Text>
      <Text>{ 'Available delivery method : '+props.deliveryType}</Text>
      <Text style={ styles.title }>Contact informations</Text>
      <Text>{ 'Seller username : '+props.username}</Text>
      <Text>{ 'Seller identity : '+props.firstName+" "+props.lastName}</Text>
      <Text>{ 'Seller email : '+props.email}</Text>
      <Text>{ 'Seller phone number : '+props.phoneNumber}</Text>
      <Text style={ styles.title }>Miscellaneous</Text>
      <Text>{ 'Posting date : '+props.postingDate}</Text>
      <Text>{ 'Last modification date : '+props.lastModificationDate}</Text>
      <Text>{ 'Category : '+props.category}</Text>
      <Text>{ 'Reference : '+props.givenRef}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontStyle: 'italic'
  },
  item: {
    width: '90%',
    borderStyle: 'dashed',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

export default ItemsView