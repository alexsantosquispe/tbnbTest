import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { GlobalStyles } from '../styles'

const CustomButton = ({ title, onPressHandler }) => {
  return (
    <TouchableOpacity
      style={GlobalStyles.buttonContainer}
      onPress={onPressHandler}>
      <Text style={GlobalStyles.buttonLabel}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
