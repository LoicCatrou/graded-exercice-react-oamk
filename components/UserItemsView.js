import React from 'react'
import { View, ScrollView } from 'react-native'
import ItemsView from './ItemsView'

const ItemView = (props) => {

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        { props.givenItems
        .filter((i) => {
          if(i.seller.username.includes(props.givenName)){
            return i;
          }
        })
        .map(i => <ItemsView  
                    key={i.ref} 
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
                  </ItemsView>
            ) 
        }
      </View>
    </ScrollView>
  );
};

export default ItemView