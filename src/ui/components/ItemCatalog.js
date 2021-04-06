import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { GlobalStyles, Colors } from '../styles'

const ItemCatalog = ({ data, onPressHandler }) => {
  return data ? (
    <TouchableOpacity
      style={[
        GlobalStyles.itemCatalog,
        {
          backgroundColor: Colors.ligth,
          borderWidth: 1,
          borderColor: data.color
        }
      ]}
      onPress={onPressHandler}>
      <Icons name={data.icon} size={36} color={data.color} />
      <Text style={{ color: data.color, fontSize: 10, textAlign: 'center' }}>
        {data.name}
      </Text>
    </TouchableOpacity>
  ) : null
}

export default ItemCatalog
