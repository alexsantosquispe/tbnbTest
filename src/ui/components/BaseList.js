import React from 'react'
import { FlatList } from 'react-native'

const BaseList = ({
  data,
  keyExtractor,
  renderItem,
  headerList = null,
  footerList = null,
  renderSeparator = null,
  horizontal = false,
  numColumns = 1
}) => {
  return (
    <FlatList
      style={{ minHeight: 100 }}
      data={data}
      numColumns={numColumns}
      horizontal={horizontal}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={renderSeparator}
      ListHeaderComponent={headerList}
      ListFooterComponent={footerList}
    />
  )
}

export default BaseList
