import * as types from "../constants/TypeActions"

export const sendEditItem = (payload) => ({
  type: types.EDIT_ITEM_SEND,
  payload,
})

export const onChangeEditItem = (payload) => ({
  type: types.EDIT_ITEM_ON_CHANGE,
  payload,
})

export const loadingEditItem = () => ({
  type: types.EDIT_ITEM_LOADING,
})

export const EditItemSuccess = (payload) => ({
  type: types.EDIT_ITEM_SUCCESS,
  payload,
})

export const EditItemError = (payload) => ({
  type: types.EDIT_ITEM_ERROR,
  payload,
})
