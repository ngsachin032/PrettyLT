import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { useDispatch } from 'react-redux';

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
        <Text style={styles.price}>Rs {props.cart?.price * props.cart?.count}</Text>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
          <Text style={styles.counterBtn} onPress={() => props.updateCount({...props.cart, count: props.cart.count - 1})}>&minus;</Text>
          <Text style={styles.prodCount}>{props.cart?.count}</Text>
          <Text style={styles.counterBtn} onPress={() => props.updateCount({...props.cart, count: props.cart.count + 1})}>&#43;</Text>
        </View>
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
    marginLeft: 5
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
    color: '#000'
  },
  deleteBtn: {
    color: 'red',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 22
  },
  price: {
    color: '#eb3d8f',
    fontWeight: 'bold',
    paddingVertical: 10,
    fontSize: 16
  },
  counterBtn: {
    color: '#eb3d8f',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    fontSize: 22
  }
})
export default CartItem;


