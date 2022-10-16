import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ProductItem = (props: any) => {
  // console.log('sachin', props.cartItem)

  const getAddedStatus = () => {
    let isAvailable = props.cartItem.find((item:any) => item.id === props.product.id);
    return isAvailable?.id
  }
  return (
    <View style={styles.prodWrapper}>
      <Image
        style={styles.prodImg}
        source={{ uri: props.product.img }}
        resizeMode={'cover'}
      />
      <View style={{padding: 15}}>
        <Text style={styles.name}>{props.product.name}</Text>
        <Text style={styles.price}>Rs {props.product.price}</Text>
        <Text style={styles.colors}>Color: {props.product.colour}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => props.handleAddToCart(props.product)} disabled={getAddedStatus() === props.product?.id}>
        
        <Text style={styles.btn} >{
          getAddedStatus() === props.product?.id ? 'Added' : 'Add to cart'
        }</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#f2a6ca",
    padding: 10
  },
  btn: {
    color: '#fff',
    fontWeight: 'bold',
  },
  prodWrapper: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 15,
    borderColor: '#e6e6e6',
    borderWidth: 1
  },
  prodImg: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%'
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#eb3d8f'
  },
  colors: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8
  }
})
export default ProductItem;


