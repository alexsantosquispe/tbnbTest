import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View, StatusBar, Alert } from 'react-native'

import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { SafeAreaView } from 'react-native-safe-area-context'
import uuid from 'react-native-uuid'

import * as Api from '../../core/api/firebaseAPI'
import { CATALOG, PRODUCTS } from '../../core/constants'
import {
  CatalogList,
  CustomModal,
  HeaderNav,
  Loading,
  ModalContainer,
  Separator,
  TempItemsList
} from '../components'
import { Colors, GlobalStyles } from '../styles'
import { useInventoryContext } from '../../core/providers/InventoryProvider'

changeNavigationBarColor(Colors.ligth, true)

const NewProduct = () => {
  const navigation = useNavigation()
  const { products } = useInventoryContext()
  const [catalogs, setCatalogs] = useState([])
  const [tempItems, setTempItems] = useState([])
  const [itemSelected, setItemSelected] = useState({})
  const [modalDetailVisibility, setModalDetailVisibility] = useState(false)
  const [loadingModal, setLoadingModal] = useState(false)

  useEffect(() => {
    const docs = Api.fetchItems(CATALOG, (result) => {
      if (result.success) {
        setCatalogs(result.data)
      }
    })
    return () => docs()
  }, [setCatalogs])

  const saveProduct = async () => {
    try {
      setLoadingModal(true)
      let response = null
      if (products && products.length > 0) {
        response = await Api.setArrayOfItems(PRODUCTS, products, tempItems)
      } else {
        response = await Api.addArrayOfItems(PRODUCTS, tempItems)
      }
      if (response.success) {
        setLoadingModal(false)
        navigation.goBack()
      }
    } catch (error) {
      console.log(error)
    }
    setLoadingModal(false)
  }

  const goBack = () => {
    if (tempItems.length > 0) {
      confirmationDialog()
    } else {
      navigation.goBack()
    }
  }

  const toggleModal = () => {
    setModalDetailVisibility(!modalDetailVisibility)
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

  const attachNewItem = (item) => {
    let tempItemsClone = [...tempItems]
    const tempItemIndex = tempItems.findIndex(
      (tempItem) => tempItem.name === item.name && tempItem.price === item.price
    )

    if (tempItemIndex !== -1) {
      const auxItem = tempItemsClone[tempItemIndex]
      tempItemsClone[tempItemIndex] = {
        ...auxItem,
        quantity: auxItem.quantity + 1
      }
      setTempItems(tempItemsClone)
    } else {
      setTempItems([
        ...tempItemsClone,
        {
          ...item,
          uid: uuid.v4(),
          quantity: 1
        }
      ])
    }
  }

  const onSelectTempItem = (item) => {
    setItemSelected(item)
    setModalDetailVisibility(true)
  }

  const incrementQuantity = (item) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 }
    const tempItemIndex = tempItems.findIndex(
      (tempItem) => tempItem.uid === item.uid
    )
    const tempItemsClone = [...tempItems]
    tempItemsClone[tempItemIndex] = updatedItem
    setTempItems(tempItemsClone)
  }

  const decrementQuantity = (item) => {
    const updatedItem = {
      ...item,
      quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity
    }
    const tempItemIndex = tempItems.findIndex(
      (tempItem) => tempItem.uid === item.uid
    )
    const tempItemsClone = [...tempItems]
    tempItemsClone[tempItemIndex] = updatedItem
    setTempItems(tempItemsClone)
  }

  const onRemoveTempItem = (item) => {
    const filtered = tempItems.filter((itemValue) => itemValue.uid !== item.uid)
    setTempItems(filtered)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
      <HeaderNav
        title="New Product"
        icon="close"
        onPressHandler={goBack}
        iconRightButton="send"
        actionRightButton={saveProduct}
      />
      <View style={GlobalStyles.mainContainer}>
        <View
          style={{
            marginVertical: 12,
            justifyContent: 'center'
          }}>
          <CatalogList catalogs={catalogs} onPressItem={attachNewItem} />
          <Separator customStyles={GlobalStyles.biggerMarginSpace} />
          <TempItemsList
            tempItems={tempItems}
            onPressItem={onSelectTempItem}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
            onRemove={onRemoveTempItem}
          />
        </View>
        <CustomModal
          data={itemSelected}
          isVisible={modalDetailVisibility}
          onCloseHandler={toggleModal}
        />
        <ModalContainer isVisible={loadingModal}>
          <Loading message="Processing..." />
        </ModalContainer>
      </View>
    </SafeAreaView>
  )
}

export default NewProduct
