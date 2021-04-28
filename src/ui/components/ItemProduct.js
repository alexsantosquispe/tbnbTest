import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Icons from 'react-native-vector-icons/FontAwesome5'
import * as Utils from '../../utils'

import { GlobalStyles, Colors } from '../styles'
import Badge from './Badge'
import CircleBadge from './CircleBadge'

const ItemProduct = ({ data, onPressHandler }) => {
  return data ? (
    <TouchableOpacity
      onPress={onPressHandler}
      style={GlobalStyles.itemContainer}>
      <View>
        <View
          style={[GlobalStyles.defaultImage, { backgroundColor: data.color }]}>
          <Icons name={data.icon} size={36} color={Colors.ligth} />
        </View>
        <CircleBadge label={data.quantity} />
      </View>
      <View style={GlobalStyles.fullContainer}>
        <View style={{ flexDirection: 'row', paddingBottom: 6 }}>
          <View style={GlobalStyles.itemProductContent}>
            <Text style={GlobalStyles.itemProductName}>{data.name}</Text>
            <Text style={GlobalStyles.labelSubTitleSmall}>
              Aliquip ipsum laborum fugiat officia cillum...
            </Text>
          </View>
          <View style={GlobalStyles.justifyContentCenter}>
            <Badge label={`$${data.price}`} color={Colors.xligthGray} />
          </View>
        </View>
        <View style={GlobalStyles.horizontalEnd}>
          <Text style={GlobalStyles.itemProductDate}>
            {Utils.friendlyFormat(data.modifiedAt)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  ) : null
}

export default ItemProduct
