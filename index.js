import 'react-native-gesture-handler'
import React from 'react'
import { AppRegistry } from 'react-native'
import Root from './src/ui/navigation'
import { name as appName } from './app.json'

const RNRoot = () => {
  return <Root />
}

AppRegistry.registerComponent(appName, () => RNRoot)
