import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { Colors, GlobalStyles } from '../styles'

const CounterItem = ({ value, onIncrement, onDecrement }) => {
  return (
    <View style={GlobalStyles.counterContainer}>
      <TouchableOpacity
        style={GlobalStyles.counterLeftButton}
        onPress={onDecrement}>
        <Icons name="minus" size={16} color={Colors.primary} />
      </TouchableOpacity>
      <View style={GlobalStyles.counterValue}>
        <Text style={[GlobalStyles.labelBlack, { fontSize: 18 }]}>{value}</Text>
      </View>
      <TouchableOpacity
        style={GlobalStyles.counterRightButton}
        onPress={onIncrement}>
        <Icons name="plus" size={16} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  )
}

export default CounterItem
