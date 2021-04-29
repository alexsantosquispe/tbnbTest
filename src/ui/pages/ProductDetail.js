import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import { Text, View, StatusBar, TouchableOpacity } from 'react-native'

import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icons from 'react-native-vector-icons/FontAwesome5'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { PRODUCTS } from '../../core/constants'

import * as Api from '../../core/api/firebaseAPI'
import { HeaderNav, CounterItem, CustomButton, Loading } from '../components'
import { Colors, GlobalStyles } from '../styles'

changeNavigationBarColor(Colors.ligth, true)

const ProductDetail = ({ route }) => {
  const { productId } = route.params
  const navigation = useNavigation()
  const [isDirty, setIsDirty] = useState(false)
  const [favorite, setFavorite] = useState(false)
  const [productDetail, setProductDetail] = useState({})
  const [loadingDetail, setLoadingDetail] = useState(false)

  useEffect(() => {
    setLoadingDetail(true)
    const unsubscribe = Api.getItemById(PRODUCTS, productId, (result) => {
      if (result.success) {
        setProductDetail(result.data)
        setLoadingDetail(false)
      }
    })
    return () => {
      unsubscribe()
    }
  }, [setLoadingDetail, setProductDetail])

  const goBack = () => {
    navigation.goBack()
  }

  const saveProductChanges = () => {
    if (isDirty) {
      console.log('Save changes')
    }
  }

  const onIncrement = () => {}

  const onDecrement = () => {}

  return (
    <SafeAreaView style={GlobalStyles.fullContainer}>
      <StatusBar
        backgroundColor={Colors.background}
        barStyle={'dark-content'}
      />
      <HeaderNav icon="chevron-back" onPressHandler={goBack} />
      {loadingDetail && !productDetail ? (
        <View style={[GlobalStyles.mainContainer, { paddingHorizontal: 28 }]}>
          <Loading />
        </View>
      ) : (
        <View style={[GlobalStyles.mainContainer, { paddingHorizontal: 28 }]}>
          <View
            style={[
              GlobalStyles.defaultImage,
              {
                backgroundColor: productDetail.color,
                marginTop: 16,
                width: 200,
                height: 240,
                alignSelf: 'center',
                borderRadius: 24
              }
            ]}>
            <Icons name={productDetail.icon} size={90} color={Colors.ligth} />
          </View>
          <View
            style={{
              paddingTop: 16,
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between'
            }}>
            <Text style={GlobalStyles.titleItem}>{productDetail.name}</Text>
            <TouchableOpacity
              style={{ alignSelf: 'center' }}
              onPress={() => setFavorite(!favorite)}>
              <IonIcons
                name={favorite ? 'heart' : 'heart-outline'}
                size={32}
                color={favorite ? Colors.danger : Colors.ligthGray}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                paddingTop: 16,
                color: Colors.dark,
                fontSize: 16,
                fontWeight: 'bold',
                paddingBottom: 4
              }}>
              Description
            </Text>
            <Text
              style={{
                lineHeight: 22,
                fontSize: 16,
                color: Colors.darkText
              }}>
              Non sunt quis do incididunt esse magna ad gisd. Ullamco quis culpa
              id exercitation sunt occaecat dolore officia sit exercitation.
              Culpa consectetur occaecat laborum pariatur minim commodo id. Amet
              irure aliquip ad minim ea tempor.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 24
            }}>
            <View
              style={{
                alignSelf: 'flex-start',
                borderRadius: 16,
                backgroundColor: Colors.xxxligthGray,
                padding: 8
              }}>
              <IonIcons name="time-outline" size={30} color={Colors.darkText} />
            </View>
            <View style={{ marginHorizontal: 12 }}>
              <Text
                style={{
                  color: Colors.dark,
                  fontSize: 16,
                  fontWeight: 'bold',
                  paddingBottom: 4
                }}>
                Last modification
              </Text>
              <Text style={{ color: Colors.darkText }}>
                {moment(productDetail.modifiedAt).format('llll')}
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingBottom: 16,
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between'
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 36,
                fontWeight: 'bold',
                color: Colors.dark
              }}>{`$${productDetail.price}`}</Text>
            <View>
              <CounterItem
                value={productDetail.quantity}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              left: 28,
              right: 28
            }}>
            <CustomButton
              title="Modify"
              onPressHandler={saveProductChanges}
              customStyle={{ paddingVertical: 14, borderRadius: 18 }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  )
}

export default ProductDetail
