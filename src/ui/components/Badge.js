import React from 'react'
import { View, Text } from 'react-native'
import { Colors, GlobalStyles } from '../styles'

const Badge = ({
  label,
  labelColor = Colors.dark,
  color = Colors.cardBackground,
  fontSize = 16
}) => {
  return (
    <View
      style={[GlobalStyles.regularBadgeContainer, { backgroundColor: color }]}>
      <Text style={{ fontWeight: 'bold', fontSize, color: labelColor }}>
        {label}
      </Text>
    </View>
  )
}

export default Badge
