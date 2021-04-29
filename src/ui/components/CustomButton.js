import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { GlobalStyles } from '../styles'

const CustomButton = ({ title, onPressHandler, customStyle = {} }) => {
  return (
    <TouchableOpacity
      style={[GlobalStyles.buttonContainer, customStyle]}
      onPress={onPressHandler}>
      <Text style={GlobalStyles.buttonLabel}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
