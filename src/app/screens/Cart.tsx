import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { addAction, deleteAction } from '../action/Action';
import CartItem from '../component/CartItem';

interface Products {
    colour: string,
    id: string,
    img: any,
    name: string,
    price: string,
    count: number
}

const Cart = () => {
    const cartItems = useSelector((state: any) => state.cartdata.cartdata);
    const dispatch = useDispatch();

    const [cartData, setCartData] = useState(cartItems)

    const deleteCart = (index: number) => {
        let newCart = cartItems;
        newCart.splice(index, 1);
        dispatch(deleteAction([...newCart]));
        setCartData([...newCart])
    }

    const UpdateCartValue = (cartValue: Products) => {
        console.log(cartValue);
        let newProduct = cartValue
        let filterProduct: Products[] = cartItems?.filter((item: any) => item.id === newProduct.id)
        if (filterProduct && filterProduct.length !== 0) {
            let newCart = [...cartItems];
            newCart.map((item: Products) => {
                if (item.id === newProduct.id) {
                    item.count = newProduct.count === 0 ? 1 : newProduct.count;
                }
            })
            dispatch(addAction(newCart))
        }
    }

    const getTotalPrice = () => {
        let total = 0;
        cartItems.map((item: Products) => {
            total = total + (parseFloat(item.price) * item.count);
        })
        return total;
    }

    return (
        <View style={styles.cartViewContainer}>
            <Text style={styles.cartHeading}>Cart Value:
                <Text style={{ color: '#eb3d8f'}}> Rs {getTotalPrice()}</Text>
            </Text>
            <FlatList
                style={{ height: 70 }}
                data={cartData}
                renderItem={({ item, index }) => (
                    <CartItem id={item.id} cart={item} handleDelete={() => deleteCart(index)} updateCount={UpdateCartValue} />
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