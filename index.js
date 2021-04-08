import 'react-native-gesture-handler'
import React from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import Root from './src/ui/navigation'

const RNRoot = () => {
  return <Root />
}

AppRegistry.registerComponent(appName, () => RNRoot)
