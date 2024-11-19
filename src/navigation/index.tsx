import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationParam } from './type';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../pages/home';
import ProductDetailScreen from '../pages/productDetail';
import FavoritesScreen from '../pages/favorites';
import BasketScreen from '../pages/basket';

const Stack = createNativeStackNavigator<NavigationParam>();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
                <Stack.Screen name='ProductDetail' component={ProductDetailScreen}></Stack.Screen>
                <Stack.Screen name='Favorites' component={FavoritesScreen} ></Stack.Screen>
                <Stack.Screen name='Basket' component={BasketScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation