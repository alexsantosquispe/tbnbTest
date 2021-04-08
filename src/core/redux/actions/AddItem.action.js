import * as types from '../constants/TypeActions'

export const sendNewItem = (payload) => ({
  type: types.NEW_ITEM_SEND,
  payload
})

export const onChangeNewItem = (payload) => ({
  type: types.NEW_ITEM_ON_CHANGE,
  payload
})

export const addTempNewItem = (payload) => ({
  type: types.NEW_ITEM_ADD_TEMP,
  payload
})

export const loadingNewItem = () => ({
  type: types.NEW_ITEM_LOADING
})

export const newItemSuccess = (payload) => ({
  type: types.NEW_ITEM_SUCCESS,
  payload
})

export const newItemError = (payload) => ({
  type: types.NEW_ITEM_ERROR,
  payload
})
