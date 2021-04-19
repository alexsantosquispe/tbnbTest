import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { InventoryProvider } from '../../core/providers/InventoryProvider'
import HomeStack from './HomeStack'

const Root = () => {
  return (
    <InventoryProvider>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </InventoryProvider>
  )
}

export default Root
