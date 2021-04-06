import React, { useState, useEffect } from "react"
import { View, Text, StatusBar } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"

import * as Api from "../../core/api/firebaseAPI"
import {
  HeaderNav,
  BaseList,
  ItemCatalog,
  InputText,
  TextArea,
} from "../components"
import { CATALOG } from "../../core/constants"
import { Colors, GlobalStyles } from "../styles"

const NewProduct = () => {
  const navigation = useNavigation()
  const [catalog, setCatalog] = useState([])
  const [nameProduct, setNameProduct] = useState("")
  const [quantity, setQuantity] = useState("1")
  const [price, setPrice] = useState("0.0")
  const [description, setDescription] = useState("")

  useEffect(() => {
    const docs = Api.fetchItems(CATALOG, (result) => {
      setCatalog(result)
    })
    return () => docs
  }, [])

  const goBack = () => {
    navigation.goBack()
  }

  const keyExtractor = (item) => {
    return item.uid.toString()
  }

  const renderItem = ({ item }) => {
    return <ItemCatalog data={item} onPressHandler={() => {}} />
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
            justifyContent: "center",
          }}
        >
          <View style={{ paddingBottom: 6 }}>
            <Text style={{ fontWeight: "700" }}>Catalog</Text>
            <Text style={{ color: Colors.textSubTitle }}>
              Select an item to fill the form automatically
            </Text>
          </View>
          <BaseList
            data={catalog}
            horizontal={true}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
          <View style={{ paddingVertical: 16 }}>
            <Text style={{ fontWeight: "700" }}>New item form</Text>
            <InputText
              value={nameProduct}
              placeholder="Product name"
              onChangeTextHandler={(text) => {
                setNameProduct(text)
              }}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <InputText
                symbol="#"
                value={quantity}
                placeholder="Product name"
                keyboardType="decimal-pad"
                width="48%"
                onChangeTextHandler={(text) => {
                  setQuantity(text)
                }}
              />
              <InputText
                symbol="$"
                value={price}
                placeholder="Product name"
                keyboardType="number-pad"
                width="48%"
                onChangeTextHandler={(text) => {
                  setPrice(text)
                }}
              />
            </View>
            <TextArea
              value={description}
              placeholder="Description..."
              onChangeTextHandler={(text) => {
                setDescription(text)
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NewProduct
