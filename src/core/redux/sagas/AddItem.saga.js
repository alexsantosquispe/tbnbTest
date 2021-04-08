import { put, call, takeLatest } from 'redux-saga/effects'
import * as Api from '../../api/firebaseAPI'
import * as AddItemActions from '../actions/AddItem.action'
import * as types from '../constants/TypeActions'

function* addNewItem({ payload }) {
  console.log('This is cool')
}

export function* sendItem() {
  yield takeLatest(types.NEW_ITEM_SEND, addNewItem)
}
