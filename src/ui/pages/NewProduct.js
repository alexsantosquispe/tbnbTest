import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Alert } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Api from '../../core/api/firebaseAPI'
import { CATALOG } from '../../core/constants'
import {
  BaseList,
  CustomModal,
  ItemCatalog,
  ItemAttached,
  HeaderNav,
  Separator
} from '../components'
import { Colors, GlobalStyles } from '../styles'

changeNavigationBarColor(Colors.ligth, true)

const NewProduct = () => {
  const navigation = useNavigation()
  const [catalog, setCatalog] = useState([])
  const [tempItems, setTempItems] = useState([])
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisibility, setModalVisibility] = useState(false)

  useEffect(() => {
    const docs = Api.fetchItems(CATALOG, (result) => {
      setCatalog(result)
    })
    return () => docs
  }, [])

  const goBack = () => {
    confirmationDialog()
  }

  const toggleModal = () => {
    setModalVisibility(!modalVisibility)
  }

  const confirmationDialog = () => {
    return Alert.alert(
      'Are you sure?',
      'All the items modified will be removed',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Yes', onPress: () => navigation.goBack() }
      ]
    )
  }

  const keyExtractor = (item) => {
    return item.uid.toString()
  }

  const renderItemCatalog = ({ item }) => {
    return (
      <ItemCatalog
        data={item}
        onPressHandler={() => {
          setTempItems((prev) => {
            return [
              ...prev,
              {
                ...item,
                uid: Date.now(),
                quantity: 1
              }
            ]
          })
        }}
      />
    )
  }

  const renderItemTemp = ({ item }) => {
    return (
      <ItemAttached
        data={item}
        onPressHandler={() => {
          setItemSelected(item)
          setModalVisibility(true)
        }}
        onRemove={() => {
          const filtered = tempItems.filter(
            (itemValue) => itemValue.uid !== item.uid
          )
          setTempItems(filtered)
        }}
      />
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
      <HeaderNav
        title="New Product"
        icon="close"
        onPressHandler={goBack}
        iconRightButton="send"
        actionRightButton={() => {}}
      />
      <View style={GlobalStyles.mainContainer}>
        <View
          style={{
            marginVertical: 12,
            justifyContent: 'center'
          }}>
          <View>
            <Text style={GlobalStyles.labelBlackSmall}>Catalog</Text>
            <Text style={GlobalStyles.labelSubTitleSmall}>
              Select an item to fill the form automatically
            </Text>
          </View>
          <BaseList
            data={catalog}
            horizontal={true}
            keyExtractor={keyExtractor}
            renderItem={renderItemCatalog}
          />
          <Separator customStyles={GlobalStyles.biggerMarginSpace} />
          <View>
            <Text style={GlobalStyles.labelBlackSmall}>Items Selected</Text>
          </View>
          <BaseList
            data={tempItems}
            numColumns={2}
            keyExtractor={keyExtractor}
            renderItem={renderItemTemp}
            footerList={() => <View style={GlobalStyles.listFooterEmpty} />}
          />
        </View>
        <CustomModal
          data={itemSelected}
          isVisible={modalVisibility}
          onCloseHandler={toggleModal}
        />
      </View>
    </SafeAreaView>
  )
}

export default NewProduct
