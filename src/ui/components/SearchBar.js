import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { Colors, GlobalStyles } from '../styles'

const SearchBar = ({
  value,
  placeholder,
  onChangeTextHandler,
  onClearHandler
}) => {
  return (
    <View style={GlobalStyles.searchBarContainer}>
      <View style={GlobalStyles.searchIcon}>
        <Icons name="search-outline" size={24} color={Colors.darkGray} />
      </View>
      <TextInput
        style={GlobalStyles.searchInput}
        selectionColor={Colors.primary}
        autoCapitalize="none"
        returnKeyType="search"
        placeholder={placeholder}
        placeholderTextColor={Colors.darkGray}
        value={value}
        onChangeText={onChangeTextHandler}
      />
      {value && value.length > 0 ? (
        <TouchableOpacity
          style={GlobalStyles.clearSearchBarButton}
          onPress={onClearHandler}>
          <Icons name="close" size={18} color={Colors.background} />
        </TouchableOpacity>
      ) : null}
    </View>
  )
}

export default SearchBar
