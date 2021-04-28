import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { Colors, GlobalStyles } from '../styles'
import CircleBadge from './CircleBadge'
import CounterItem from './CounterItem'

const ItemTemp = ({
  data,
  onPressHandler,
  onIncrement,
  onDecrement,
  onRemove
}) => {
  return data ? (
    <TouchableOpacity
      style={GlobalStyles.itemAttached}
      onPress={onPressHandler}>
      <CircleBadge
        icon="close"
        position={{ right: 8, top: 8 }}
        color={Colors.transparentDark}
        onPressHandler={onRemove}
      />
      <View style={{ paddingBottom: 8 }}>
        <Icons name={data.icon} size={64} color={data.color} />
      </View>
      <View
        style={{
          paddingHorizontal: 6,
          marginBottom: 8
        }}>
        <Text style={GlobalStyles.itemAttachedLabel}>
          {data.name.toUpperCase()}
        </Text>
        <Text style={GlobalStyles.description}>
          Short description for this item
        </Text>
        <Text style={GlobalStyles.labelBlack}>{`$${data.price}`}</Text>
      </View>
      <CounterItem
        value={data.quantity}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </TouchableOpacity>
  ) : null
}

export default ItemTemp
