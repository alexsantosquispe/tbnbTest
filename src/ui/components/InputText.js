import React from 'react'
import { View, TextInput, Text } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { Colors, GlobalStyles } from '../styles'

const InputText = ({
  value,
  icon,
  symbol,
  placeholder,
  keyboardType = 'default',
  onChangeTextHandler,
  width = '100%'
}) => {
  return (
    <View
      style={[
        GlobalStyles.searchBarContainer,
        { width: width, paddingLeft: 8 }
      ]}>
      {icon ? (
        <View style={GlobalStyles.searchIcon}>
          <Icons name={icon} size={24} color={Colors.darkGray} />
        </View>
      ) : symbol ? (
        <View style={GlobalStyles.inputSymbol}>
          <Text
            style={{
              color: Colors.darkGray,
              fontSize: 22,
              fontWeight: 'bold'
            }}>
            {symbol}
          </Text>
        </View>
      ) : null}
      <TextInput
        style={GlobalStyles.searchInput}
        selectionColor={Colors.primary}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor={Colors.darkGray}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeTextHandler}
      />
    </View>
  )
}

export default InputText
