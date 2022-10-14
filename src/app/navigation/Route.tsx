import React from 'react';
import Cart from '../screens/Cart';
import List from '../screens/List';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

const screens = createNativeStackNavigator();


const MainRoute = () => {

  return (
    <screens.Navigator initialRouteName="List">
      
      <screens.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: true }}
      />
      <screens.Screen
        name="List"
        component={List}
        options={({ navigation }) => ({ 
          headerShown: true,
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Cart')}
              title="Cart"
              color="#f2a6ca"
            />
          ), 
        })}
      />
    </screens.Navigator>

  );
};
export default MainRoute;