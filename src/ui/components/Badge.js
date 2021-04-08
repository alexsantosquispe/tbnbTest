import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../styles'

const Badge = ({ label, color = Colors.warning }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6
      }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{label}</Text>
    </View>
  )
}

export default Badge
