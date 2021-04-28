import React from 'react'
import { View, Text } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import { Colors, GlobalStyles } from '../styles'

const EmptyList = ({ size = 'default' }) => {
  const message = 'You have not added any item yet'
  const minHeight = size === 'small' ? 100 : '50%'

  return (
    <View style={[GlobalStyles.emptyLayout, { minHeight: minHeight }]}>
      <View style={{ marginVertical: 16 }}>
        <Text
          style={{ color: Colors.darkGray, fontWeight: '600', fontSize: 17 }}>
          {message}
        </Text>
      </View>
      {size === 'default' ? (
        <Icons name="cube-outline" size={80} color={Colors.ligthGray} />
      ) : null}
    </View>
  )
}

export default EmptyList
