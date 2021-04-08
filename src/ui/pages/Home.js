import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { SafeAreaView } from 'react-native-safe-area-context'

import * as Api from '../../core/api/firebaseAPI'
import { PRODUCTS } from '../../core/constants'
import {
  FloatButton,
  ItemProduct,
  SearchBar,
  Separator,
  BaseList
} from '../components'
import { NEW_PRODUCT } from '../navigation/RouteNames'
import { GlobalStyles, Colors } from '../styles'

changeNavigationBarColor(Colors.ligth, true)

const Home = () => {
  const navigation = useNavigation()
  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const docs = Api.fetchItems(PRODUCTS, (result) => {
      setProducts(result)
    })
    return () => docs
  }, [])

  const renderItem = ({ item }) => {
    return <ItemProduct data={item} onPressHandler={() => {}} />
  }

  const keyExtractor = (item) => {
    return item.uid.toString()
  }

  const addNewProduct = () => {
    navigation.navigate(NEW_PRODUCT)
  }

  const headerList = () => {
    return (
      <View style={{ padding: 6 }}>
        <Text style={{ fontWeight: '700' }}>Products List</Text>
      </View>
    )
  }

  const renderSeparator = () => {
    return <Separator />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
      <View style={[GlobalStyles.mainContainer]}>
        <Text style={GlobalStyles.titleText}>Inventory</Text>
        <SearchBar
          value={searchText}
          placeholder="Search item..."
          onChangeTextHandler={(text) => {
            setSearchText(text)
          }}
          onClearHandler={() => {}}
        />
        <BaseList
          data={products}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          headerList={headerList}
          renderSeparator={renderSeparator}
        />
        <FloatButton icon="add" onPressHandler={addNewProduct} />
      </View>
    </SafeAreaView>
  )
}

export default Home
