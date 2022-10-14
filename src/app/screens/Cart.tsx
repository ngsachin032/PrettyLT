import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAction } from '../action/Action';
import CartItem from '../component/CartItem';

const Cart = () => {
    const cartItems = useSelector((state: any) => state.cartdata.cartdata);
    const dispatch = useDispatch();

    const [cartData, setCartData] = useState(cartItems)

    const deleteCart = (index: number) => {
        let newCart = cartItems;
        newCart.splice(index, 1);
        dispatch(deleteAction(newCart));
        setCartData([...newCart])
    }

    return (
        <View style={styles.cartViewContainer}>
            <Text style={styles.cartHeading}>My Cart: </Text>
            <FlatList
                data={cartData}
                renderItem={({ item, index }) => (
                    <CartItem id={item.id} cart={item} handleDelete={() => deleteCart(index)} />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cartViewContainer: {
        flex: 1, 
        padding: 10
    },
    cartHeading: {
        fontWeight: 'bold', 
        fontSize: 22
    }
})

export default Cart;