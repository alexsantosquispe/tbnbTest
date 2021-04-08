import React from 'react'
import { View, Text } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { Colors, GlobalStyles } from '../styles'

changeNavigationBarColor(Colors.ligth, true)

const History = () => {
  return (
    <View style={[GlobalStyles.mainContainer, GlobalStyles.centeredContainer]}>
      <Text>History screen</Text>
    </View>
  )
}

export default History
