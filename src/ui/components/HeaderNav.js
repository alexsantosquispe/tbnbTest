import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import { Colors, GlobalStyles } from '../styles'

const HeaderNav = ({
  icon,
  title,
  onPressHandler,
  iconRightButton,
  textRigthButton,
  actionRightButton,
  disableRigthButton = false
}) => {
  return (
    <View style={{ width: '100%', height: 56 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: Colors.background,
          alignItems: 'center',
          elevation: 0
        }}>
        <TouchableOpacity
          style={{
            marginHorizontal: 16,
            padding: 4
          }}
          onPress={onPressHandler}>
          <Icons name={icon} size={26} color={Colors.info} />
        </TouchableOpacity>
        {title ? (
          <View style={GlobalStyles.fullContainer}>
            <Text style={{ fontWeight: '700', fontSize: 20 }}>{title}</Text>
          </View>
        ) : null}
        {iconRightButton && actionRightButton ? (
          <TouchableOpacity
            style={{
              marginHorizontal: 16,
              padding: 4,
              borderRadius: 12,
              backgroundColor: Colors.infoLigth
            }}
            onPress={actionRightButton}>
            <Icons name={iconRightButton} size={26} color={Colors.primary} />
          </TouchableOpacity>
        ) : null}
        {textRigthButton && actionRightButton ? (
          <TouchableOpacity
            disabled={disableRigthButton}
            style={{
              marginHorizontal: 16,
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 12,
              backgroundColor: disableRigthButton
                ? Colors.xxxligthGray
                : Colors.infoLigth
            }}
            onPress={actionRightButton}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: disableRigthButton ? Colors.ligthGray : Colors.info
              }}>
              {textRigthButton}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  )
}

export default HeaderNav
