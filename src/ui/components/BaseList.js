import React from 'react'
import { FlatList } from 'react-native'

import EmptyList from './EmptyList'
import Loading from './Loading'

const BaseList = ({
  data,
  keyExtractor,
  renderItem,
  headerList = null,
  footerList = null,
  renderSeparator = null,
  horizontal = false,
  numColumns = 1,
  loading = false
}) => {
  return loading ? (
    <Loading message="Loading..." />
  ) : data.length === 0 ? (
    <EmptyList size={horizontal ? 'small' : 'default'} />
  ) : (
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
