import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { GlobalStyles, Colors } from '../styles'
import Badge from './Badge'
import CircleBadge from './CircleBadge'

const ItemProduct = ({ data, onPressHandler }) => {
  return data ? (
    <TouchableOpacity
      onPress={onPressHandler}
      style={GlobalStyles.itemContainer}>
      <View>
        <View style={GlobalStyles.defaultImage}>
          <Icons name="cube-outline" size={36} color={Colors.ligth} />
        </View>
        <CircleBadge label={5} position={{ right: -8, bottom: -8 }} />
      </View>
      <View
        style={{
          flex: 1,
          marginLeft: 16,
          marginRight: 8,
          alignSelf: 'center'
        }}>
        <Text style={{ fontSize: 17, fontWeight: '700' }}>{data.name}</Text>
        <Text style={{ fontSize: 14, color: Colors.darkGray }}>Example</Text>
      </View>
      <Badge label="$25" color={Colors.warning} />
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingLeft: 8
        }}>
        <Icons name="chevron-forward" size={24} color={Colors.darkGray} />
      </View>
    </TouchableOpacity>
  ) : null
}

export default ItemProduct
