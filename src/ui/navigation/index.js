import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeStack from './HomeStack'

const Root = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )
}

export default Root
