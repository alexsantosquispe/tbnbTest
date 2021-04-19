import React from 'react'
import { View, Text } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

import { Colors, GlobalStyles } from '../styles'

const ItemHistory = ({ data, isFirst, isLast }) => {
  const icons = {
    success: 'add',
    warning: 'create',
    danger: 'trash'
  }

  return data ? (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 4,
        marginHorizontal: 2,
        justifyContent: 'center'
      }}>
      <View style={{ width: '15%' }}>
        <Text style={GlobalStyles.labelBlack}>{data.time}</Text>
      </View>
      <View style={{ width: '5%', alignItems: 'center' }}>
        <Icons
          name={isFirst ? 'radio-button-on' : 'radio-button-off'}
          size={isFirst ? 19 : 12}
          color={Colors.primary}
        />
        {!isLast ? (
          <View
            style={{ flex: 1, width: 0.5, backgroundColor: Colors.primary }}
          />
        ) : null}
      </View>
      <View
        style={{
          flex: 1,
          padding: 12,
          marginLeft: 8,
          marginBottom: 12,
          backgroundColor: Colors.cardBackground,
          borderRadius: 10
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text
              style={{ color: Colors.dark, fontSize: 18, fontWeight: '700' }}>
              {data.action}
            </Text>
          </View>
          <View
            style={{
              width: 28,
              height: 28,
              backgroundColor: Colors.ligth,
              borderRadius: 14,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Icons
              name={icons[data.type]}
              size={22}
              color={Colors[data.type]}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginVertical: 8
          }}>
          {data.items.map((item) => {
            return (
              <View
                key={item.uid.toString()}
                style={{
                  flexDirection: 'row',
                  backgroundColor: Colors.xxligthGray || item.color,
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  borderRadius: 10,
                  marginVertical: 2,
                  marginRight: 6
                }}>
                <Icons name={item.icon} size={16} color={Colors.dark} />
                <Text
                  style={{
                    color: Colors.dark,
                    paddingHorizontal: 4,
                    fontWeight: 'bold'
                  }}>
                  {item.name}
                </Text>
              </View>
            )
          })}
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 26,
              height: 26,
              backgroundColor: Colors.primary,
              borderRadius: 13,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 4
            }}>
            <Text
              style={{ color: Colors.ligth, fontSize: 16, fontWeight: 'bold' }}>
              A
            </Text>
          </View>
          <Text style={{ color: Colors.dark, fontSize: 14 }}>Alex Santos</Text>
        </View>
      </View>
    </View>
  ) : null
}

export default ItemHistory
