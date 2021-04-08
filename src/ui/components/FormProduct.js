import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'

import { Colors, GlobalStyles } from '../styles'
import CircleBadge from './CircleBadge'
import CustomButton from './CustomButton'
import InputText from './InputText'

const FormProduct = ({ data, onClose, onSave }) => {
  const [nameProduct, setNameProduct] = useState(data.name)
  const [quantity, setQuantity] = useState(data.quantity.toString())
  const [price, setPrice] = useState(data.price.toString())

  return data ? (
    <View style={GlobalStyles.modalForm}>
      <CircleBadge
        icon="close"
        position={GlobalStyles.topRight}
        color={Colors.transparentDark}
        onPressHandler={onClose}
      />
      <View style={{ padding: 8, alignItems: 'center' }}>
        <Icons name={data.icon} size={70} color={data.color} />
      </View>
      <Text style={GlobalStyles.labelBlackSmall}>Product name</Text>
      <InputText
        value={nameProduct}
        placeholder="Product name"
        onChangeTextHandler={(text) => {
          setNameProduct(text)
        }}
      />
      <Text style={GlobalStyles.labelBlackSmall}>Quantity</Text>
      <InputText
        value={quantity}
        placeholder="Product name"
        keyboardType="decimal-pad"
        onChangeTextHandler={(text) => {
          setQuantity(text)
        }}
      />
      <Text style={GlobalStyles.labelBlackSmall}>Price</Text>
      <InputText
        value={price}
        placeholder="Product name"
        keyboardType="number-pad"
        onChangeTextHandler={(text) => {
          setPrice(text)
        }}
      />
      <CustomButton title="Save" onPressHandler={onSave} />
    </View>
  ) : null
}

export default FormProduct
