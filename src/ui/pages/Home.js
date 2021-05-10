import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { SafeAreaView } from 'react-native-safe-area-context'

import * as Api from '../../core/api/firebaseAPI'
import { PRODUCTS } from '../../core/constants'
import { useInventoryContext } from '../../core/providers/InventoryProvider'
import {
  FloatButton,
  ItemProduct,
  SearchBar,
  Separator,
  BaseList
} from '../components'
import { PRODUCT_DETAIL } from '../navigation/RouteNames'
import { NEW_PRODUCT } from '../navigation/RouteNames'
import { GlobalStyles, Colors } from '../styles'

changeNavigationBarColor(Colors.ligth, true)

const Home = () => {
  const { products, setProducts } = useInventoryContext()
  const navigation = useNavigation()
  const [searchText, setSearchText] = useState('')
  const [loadingProducts, setLoadingProducts] = useState(false)

  useEffect(() => {
    setLoadingProducts(true)
    const unsubscribe = Api.fetchItems(
      PRODUCTS,
      (result) => {
        if (result.success) {
          setProducts(result.data)
          setLoadingProducts(false)
        }
      },
      ['modifiedAt', 'desc'],
      true
    )
    return () => {
      unsubscribe()
    }
  }, [setProducts, setLoadingProducts])

  const onRefreshList = () => {
    setLoadingProducts(true)
    Api.fetchItems(
      PRODUCTS,
      (result) => {
        if (result.success) {
          setProducts(result.data)
          setLoadingProducts(false)
        }
      },
      ['modifiedAt', 'desc'],
      true
    )
  }

  const openProducDetail = (productSelected) => {
    navigation.navigate(PRODUCT_DETAIL, {
      productId: productSelected.uid
    })
  }

  const keyExtractor = (item) => {
    return item.uid.toString()
  }

  const renderItem = ({ item }) => {
    return (
      <ItemProduct data={item} onPressHandler={() => openProducDetail(item)} />
    )
  }

  const addNewProduct = () => {
    navigation.navigate(NEW_PRODUCT)
  }

  const renderHeader = () => {
    return (
      <View style={{ padding: 6 }}>
        <Text style={{ fontWeight: '700' }}>Products List</Text>
      </View>
    )
  }

  const renderSeparator = () => <Separator />

  const renderFooter = () => <View style={GlobalStyles.listFooterEmpty} />

  return (
    <SafeAreaView style={GlobalStyles.fullContainer}>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
      <View style={GlobalStyles.mainContainer}>
        <Text style={GlobalStyles.titleText}>Inventory</Text>
        <SearchBar
          value={searchText}
          placeholder="Search item..."
          onChangeTextHandler={setSearchText}
          onClearHandler={() => {}}
        />
        <BaseList
          data={products}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          headerList={renderHeader}
          footerList={renderFooter}
          renderSeparator={renderSeparator}
          loading={loadingProducts}
          onRefreshHandler={onRefreshList}
        />
        <FloatButton icon="add" onPressHandler={addNewProduct} />
      </View>
    </SafeAreaView>
  )
}

export default Home
