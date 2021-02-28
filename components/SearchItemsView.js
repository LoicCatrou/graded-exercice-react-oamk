import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native'

import ItemsView from './ItemsView'

const SearchItemsView = (props) => {

  const [SearchCategory, setSearchCategory] = useState('');
  const [SearchDate, setSearchDate] = useState('');
  const [SearchCity, setSearchCity] = useState('');
  const [SearchCountry, setSearchCountry] = useState('');

  return (
    <View>
      <ScrollView>
        <TextInput style={ styles.search } value={ SearchCategory } placeholder="Search by category..." onChangeText={ value => setSearchCategory(value)}/>
        <TextInput style={ styles.search } value={ SearchDate } placeholder="Search by posting date..." onChangeText={ value => setSearchDate(value)}/>
        <TextInput style={ styles.search } value={ SearchCity } placeholder="Search by city..." onChangeText={ value => setSearchCity(value)}/>
        <TextInput style={ styles.searchLast } value={ SearchCountry } placeholder="Search by country..." onChangeText={ value => setSearchCountry(value)}/>
        { props.givenItem
          .filter((i) => {
            if(SearchCategory=='' && SearchDate=='' && SearchCity=='' && SearchCountry==''){
              return i;
            }
            else if(i.category.toLowerCase().includes(SearchCategory.toLowerCase()) && SearchDate=='' && SearchCity=='' && SearchCountry==''){
              return i;
            }
            else if(i.postingDate.includes(SearchDate) && SearchCategory=='' && SearchCity=='' && SearchCountry==''){
              return i;
            }
            else if(i.city.toLowerCase().includes(SearchCity.toLowerCase()) && SearchDate=='' && SearchCategory=='' && SearchCountry==''){
              return i;
            }
            else if(i.country.toLowerCase().includes(SearchCountry.toLowerCase()) && SearchDate=='' && SearchCategory=='' && SearchCity==''){
              return i;
            }
          })
          .map(i => <ItemsView  
                      key={i.ref}
                      givenRef={i.ref} 
                      title={i.title} 
                      description={i.description} 
                      category={i.category} 
                      address={i.address}
                      city={i.city}
                      country={i.country}
                      image={i.image}
                      price={i.price}
                      deliveryType={i.deliveryType}
                      username={i.seller.username}
                      firstName={i.seller.firstName}
                      lastName={i.seller.lastName}
                      email={i.seller.email}
                      phoneNumber={i.seller.phoneNumber}
                      postingDate={i.postingDate}
                      lastModificationDate={i.lastModificationDate}>
                    </ItemsView>) }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 10
  },
  searchLast: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 10,
    marginBottom: 10
  }
});

export default SearchItemsView