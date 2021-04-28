import React from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import { GlobalStyles } from '../styles'

const ModalContainer = ({ isVisible, children }) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
      backdropTransitionOutTiming={0}>
      <View
        style={[
          GlobalStyles.emptyLayout,
          { borderRadius: 16, marginHorizontal: 24, padding: 16 }
        ]}>
        {children}
      </View>
    </Modal>
  )
}

export default ModalContainer
