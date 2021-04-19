import React from 'react'
import { View, Text } from 'react-native'

import { GlobalStyles } from '../styles'
import BaseList from './BaseList'
import ItemTemp from './ItemTemp'

const TempItemsList = ({
  tempItems,
  onPressItem,
  onIncrement,
  onDecrement,
  onRemove
}) => {
  const keyExtractor = (item) => item.uid.toString()

  const renderHeader = () => {
    return (
      <View>
        <Text style={GlobalStyles.labelBlackSmall}>Items Selected</Text>
      </View>
    )
  }

  const rednerFooter = () => <View style={GlobalStyles.listFooterEmpty} />

  const renderItemTemp = ({ item }) => {
    return (
      <ItemTemp
        data={item}
        onPressHandler={() => onPressItem(item)}
        onIncrement={() => onIncrement(item)}
        onDecrement={() => onDecrement(item)}
        onRemove={() => onRemove(item)}
      />
    )
  }

  return (
    <BaseList
      data={tempItems}
      numColumns={2}
      keyExtractor={keyExtractor}
      renderItem={renderItemTemp}
      headerList={renderHeader}
      footerList={rednerFooter}
    />
  )
}

export default TempItemsList
