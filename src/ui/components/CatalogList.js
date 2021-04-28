import React from 'react'
import { View, Text } from 'react-native'

import { GlobalStyles } from '../styles'
import BaseList from './BaseList'
import ItemCatalog from './ItemCatalog'

const CatalogList = ({ catalogs, onPressItem, loading = false }) => {
  const keyExtractor = (item) => {
    return item.uid.toString()
  }

  const renderItemCatalog = ({ item }) => {
    return <ItemCatalog data={item} onPressHandler={() => onPressItem(item)} />
  }

  return (
    <View>
      <View>
        <Text style={GlobalStyles.labelBlackSmall}>Catalog</Text>
        <Text style={GlobalStyles.labelSubTitleSmall}>
          Select an item to fill the form automatically
        </Text>
      </View>
      <BaseList
        data={catalogs}
        horizontal={true}
        keyExtractor={keyExtractor}
        renderItem={renderItemCatalog}
        loading={loading}
      />
    </View>
  )
}

export default CatalogList
