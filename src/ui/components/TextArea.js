import React from "react"
import { View, TextInput } from "react-native"
import { Colors, GlobalStyles } from "../styles"

const TextArea = ({ value, placeholder, onChangeTextHandler }) => {
  return (
    <View
      style={[
        GlobalStyles.searchBarContainer,
        { height: 100, paddingHorizontal: 8 },
      ]}
    >
      <TextInput
        style={[
          GlobalStyles.searchInput,
          {
            paddingTop: 4,
            textAlignVertical: "top",
            alignSelf: "flex-start",
          },
        ]}
        selectionColor={Colors.primary}
        multiline={true}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor={Colors.darkGray}
        value={value}
        onChangeText={onChangeTextHandler}
      />
    </View>
  )
}

export default TextArea
