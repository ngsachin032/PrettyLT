import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native'
import ProductItem from '../component/ProductItem';
import HttpService from '../services/HttpService';
import { useSelector, useDispatch } from 'react-redux'
import { addAction } from '../action/Action';

interface Products {
  colour: string,
  id: string,
  img: any,
  name: string,
  price: string,
  count: number
}

const List = () => {

  const cartItems = useSelector((state: any) => state.cartdata.cartdata);
  const dispatch = useDispatch();

  const [apiData, setApiData] = useState<Products[]>([]);

  useEffect(() => {
    getApiData();
    console.log('cart is => ', cartItems)
  }, [])

  const getApiData = async () => {
    try {
      let response = await HttpService.callFetchGet('products');
      setApiData(response)
    } catch (error) {
      console.log(error)
    }
  }

  const AddToCart = (data: Products) => {
    let newProduct = data
    let filterProduct: Products[] = cartItems?.filter((item: any) => item.id === newProduct.id)
    if (filterProduct && filterProduct.length === 0) {
      newProduct.count = 1;
      dispatch(addAction([...cartItems, newProduct]))
    }
  }

  const getValue = (a: any, b: any) => {
    return a+b
  }

  return (
    <View style={styles.listWrapper}>
      <FlatList
        style={styles.listContainer}
        data={apiData}
        renderItem={({ item }) => (
          <ProductItem product={item} handleAddToCart={(item: Products) => AddToCart(item)} cartItem={cartItems} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    width: '100%'
  },
  listWrapper: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginBottom: 30
  },
  listContainer: {
    marginHorizontal: 15
  }

})

export default List;


