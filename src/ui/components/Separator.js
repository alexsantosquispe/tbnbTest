import React from 'react'
import { View } from 'react-native'
import { GlobalStyles } from '../styles'

const Separator = ({ customStyles = {} }) => {
  return <View style={[GlobalStyles.separatorLine, customStyles]} />
}

export default Separator
