import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { SafeAreaView } from 'react-native-safe-area-context'

import * as Api from '../../core/api/firebaseAPI'
import { HISTORY } from '../../core/constants'
import { BaseList, ItemHistory } from '../components'
import { GlobalStyles, Colors } from '../styles'

changeNavigationBarColor(Colors.ligth, true)

const History = () => {
  const [historyList, setHistoryList] = useState([
    {
      uid: 1,
      time: '17:00',
      action: 'Item removed',
      type: 'danger',
      items: [
        {
          uid: 1,
          name: 'Tools',
          icon: 'cube-outline',
          color: '#83B7FF'
        }
      ]
    },
    {
      uid: 2,
      time: '15:00',
      action: 'Item modified',
      type: 'warning',
      items: [
        {
          uid: 1,
          name: 'Tools',
          icon: 'cube-outline',
          color: '#83B7FF'
        }
      ]
    },
    {
      uid: 3,
      time: '11:00',
      action: 'New item added',
      type: 'success',
      items: [
        {
          uid: 1,
          name: 'Tools',
          icon: 'cube-outline',
          color: '#83B7FF'
        }
      ]
    },
    {
      uid: 4,
      time: '8:00',
      action: 'Bunch of items added',
      type: 'success',
      items: [
        {
          uid: 1,
          name: 'Tools',
          icon: 'cube-outline',
          color: '#FFDD46'
        },
        {
          uid: 2,
          name: 'Computer',
          icon: 'cube-outline',
          color: '#00E2C4'
        },
        {
          uid: 3,
          name: 'Audio',
          icon: 'cube-outline',
          color: '#E04B71'
        },
        {
          uid: 4,
          name: 'Clothes',
          icon: 'cube-outline',
          color: '#8284FA'
        }
      ]
    },
    {
      uid: 6,
      time: '18:00',
      action: 'Item modified',
      type: 'warning',
      items: [
        {
          uid: 1,
          name: 'Tools',
          icon: 'cube-outline',
          color: '#83B7FF'
        }
      ]
    }
  ])

  useEffect(() => {
    const historyDocs = Api.fetchItems(HISTORY, (response) => {
      if (response.success) {
        // setHistoryList(response.data)
      }
    })
    return () => historyDocs()
  }, [setHistoryList])

  const keyExtractor = (item) => {
    return item.uid.toString()
  }

  const renderItem = ({ item }) => {
    return (
      <ItemHistory
        data={item}
        isFirst={item.uid === historyList[0].uid}
        isLast={item.uid === historyList[historyList.length - 1].uid}
      />
    )
  }

  const historyListFooter = () => <View style={GlobalStyles.listFooterEmpty} />

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
      <View style={GlobalStyles.mainContainer}>
        <Text style={GlobalStyles.titleText}>History</Text>
        <Text style={GlobalStyles.textSubTitle}>Today, April 9</Text>
        <BaseList
          data={historyList}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          footerList={historyListFooter}
        />
      </View>
    </SafeAreaView>
  )
}

export default History
