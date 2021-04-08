import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../styles'

const HeaderNav = ({
  icon,
  title,
  onPressHandler,
  iconRightButton,
  actionRightButton
}) => {
  return (
    <View style={{ width: '100%', height: 56 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: Colors.background,
          alignItems: 'center',
          elevation: 3
        }}>
        <TouchableOpacity
          style={{ paddingHorizontal: 12 }}
          onPress={onPressHandler}>
          <Icons name={icon} size={26} color={Colors.primary} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700', fontSize: 20 }}>{title}</Text>
        </View>
        {iconRightButton && actionRightButton ? (
          <TouchableOpacity
            style={{ paddingHorizontal: 12 }}
            onPress={actionRightButton}>
            <Icons name={iconRightButton} size={26} color={Colors.primary} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  )
}

export default HeaderNav
