import React from "react"
import { FlatList } from "react-native"

const BaseList = ({
  data,
  keyExtractor,
  renderItem,
  headerList = null,
  renderSeparator = null,
  horizontal = false,
}) => {
  return (
    <FlatList
      data={data}
      horizontal={horizontal}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={renderSeparator}
      ListHeaderComponent={headerList}
    />
  )
}

export default BaseList
