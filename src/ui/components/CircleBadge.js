import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { Colors, GlobalStyles } from '../styles'

const CircleBadge = ({
  label,
  position = { right: 0, left: 0, top: 0, bottom: 0 },
  color = Colors.secondary,
  textColor = Colors.dark,
  icon,
  onPressHandler
}) => {
  return label ? (
    <View
      style={[
        GlobalStyles.circleBadgeText,
        {
          backgroundColor: color,
          right: position.right,
          left: position.left,
          top: position.top,
          bottom: position.bottom
        }
      ]}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, color: textColor }}>
        {label}
      </Text>
    </View>
  ) : icon ? (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[
        GlobalStyles.circleBadgeIcon,
        {
          backgroundColor: color,
          right: position.right,
          left: position.left,
          top: position.top,
          bottom: position.bottom
        }
      ]}>
      <Icons name={icon} size={20} color={Colors.ligth} />
    </TouchableOpacity>
  ) : null
}

export default CircleBadge
