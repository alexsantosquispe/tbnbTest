import React from 'react'
import Modal from 'react-native-modal'
import FormProduct from './FormProduct'

const CustomModal = ({ data, isVisible, onCloseHandler }) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
      backdropTransitionOutTiming={0}>
      <FormProduct data={data} onClose={onCloseHandler} onSave={() => {}} />
    </Modal>
  )
}

export default CustomModal
