import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Products from '../Products'
import Cart from './Cart'
import Fav from './Fav'

const Stack=createStackNavigator()
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Products' component={Products}/>
            <Stack.Screen name='Cart' component={Cart}/>
            <Stack.Screen name='Fav' component={Fav}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator