import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons'
import { Home, History, ProductDetail, NewProduct } from '../pages'
import { Colors } from '../styles'
import { PRODUCTS, HISTORY, PRODUCT_DETAIL, NEW_PRODUCT } from './RouteNames'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const mainTab = () => {
  return (
    <Tabs.Navigator
      initialRouteName={PRODUCTS}
      tabBarOptions={{
        activeTintColor: Colors.active,
        inactiveTintColor: Colors.inactive,
        labelStyle: {
          fontSize: 12.5,
          fontWeight: '700'
        }
      }}>
      <Tabs.Screen
        name={PRODUCTS}
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icons
              name={focused ? 'cube' : 'cube-outline'}
              color={color}
              size={26}
            />
          )
        }}
      />
      <Tabs.Screen
        name={HISTORY}
        component={History}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icons
              name={focused ? 'reader' : 'reader-outline'}
              color={color}
              size={26}
            />
          )
        }}
      />
    </Tabs.Navigator>
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={PRODUCTS}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={PRODUCTS} component={mainTab} />
      <Stack.Screen name={NEW_PRODUCT} component={NewProduct} />
      <Stack.Screen name={PRODUCT_DETAIL} component={ProductDetail} />
    </Stack.Navigator>
  )
}

export default HomeStack
