import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { Colors, GlobalStyles } from '../styles'

const FloatButton = ({ icon, onPressHandler }) => {
  return (
    <TouchableOpacity onPress={onPressHandler} style={GlobalStyles.floatButton}>
      <Icons name={icon} size={30} color={Colors.background} />
    </TouchableOpacity>
  )
}

export default FloatButton
