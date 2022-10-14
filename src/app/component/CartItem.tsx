import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const CartItem = (props: any) => {
  return (
    <View style={styles.searchContainer} key={props.cart?.id}>
      <Image
        style={styles.prodImg}
        source={{ uri: props.cart?.img }}
        resizeMode={'cover'}
      />
      <View style={styles.cartContent}>
        <Text style={styles.prodName}>{props.cart?.name}</Text>
        <Text style={styles.prodCount}>Count: {props.cart?.count}</Text>
      </View>
      
      <Text style={styles.deleteBtn} onPress={() => props.handleDelete()}>&times;</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    margin: 10,
    flexDirection: 'row',
    display: 'flex'
  },
  cartContent: {
    width: 0,
        flexGrow: 1,
        flex: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginVertical: 10,
  },
  prodImg: {
    height: undefined, 
    width: '25%' 
  },
  prodName: {
    fontSize: 16, 
    fontWeight: 'bold'
  },
  prodCount: {
    color: '#eb3d8f'
  },
  deleteBtn: {
    color: 'red', 
    fontWeight: 'bold', 
    padding: 10, 
    fontSize: 22
  }
})
export default CartItem;


