import * as types from '../constants/TypeActions'
const initialState = {
  loading: false,
  response: null,
  error: null,
  tempItem: null,
  tempList: []
}

const addItemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.NEW_ITEM_ON_CHANGE:
      return {
        ...state,
        tempItem: payload
      }
    case types.NEW_ITEM_ADD_TEMP:
      return {
        ...state,
        tempList: [...state.tempList, payload]
      }
    case types.NEW_ITEM_LOADING:
      return {
        ...state,
        loading: true
      }
    case types.NEW_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        response: payload
      }
    case types.NEW_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state
  }
}

export default addItemReducer
