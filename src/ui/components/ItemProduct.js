import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { GlobalStyles, Colors } from '../styles'

const ItemProduct = ({ data, onPressHandler }) => {
  return data ? (
    <TouchableOpacity
      onPress={onPressHandler}
      style={GlobalStyles.itemContainer}>
      <View>
        <View style={GlobalStyles.defaultImage}>
          <Icons name="cube-outline" size={36} color={Colors.ligth} />
        </View>
        <View
          style={{
            position: 'absolute',
            right: -8,
            bottom: -8,
            backgroundColor: Colors.secondary,
            paddingHorizontal: 8,
            paddingVertical: 2,
            borderRadius: 15
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>7</Text>
        </View>
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
      <View
        style={{
          backgroundColor: Colors.warning,
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderRadius: 6
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>$25</Text>
      </View>
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
