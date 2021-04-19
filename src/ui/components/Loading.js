import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { Colors, GlobalStyles } from '../styles'

const Loading = ({ message }) => {
  return (
    <View style={GlobalStyles.loadingContainer}>
      <ActivityIndicator size="large" color={Colors.primary} />
      {message ? (
        <Text style={[GlobalStyles.labelBlackSmall, { paddingTop: 8 }]}>
          {message}
        </Text>
      ) : null}
    </View>
  )
}

export default Loading
