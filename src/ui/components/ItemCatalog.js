import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { GlobalStyles, Colors } from '../styles'

const ItemCatalog = ({ data, onPressHandler, isSelected = false }) => {
  return data ? (
    <TouchableOpacity
      style={[
        GlobalStyles.itemCatalog,
        isSelected ? GlobalStyles.itemSelected : GlobalStyles.itemNoSelected
      ]}
      onPress={onPressHandler}>
      <Icons
        name={data.icon}
        size={36}
        color={isSelected ? Colors.ligth : Colors.primary}
      />
      <Text
        style={[
          GlobalStyles.itemCatalogLabel,
          { color: isSelected ? Colors.ligth : Colors.primary }
        ]}>
        {data.name}
      </Text>
    </TouchableOpacity>
  ) : null
}

export default ItemCatalog
