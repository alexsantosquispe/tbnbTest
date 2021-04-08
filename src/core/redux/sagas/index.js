import { all } from 'redux-saga/effects'
import { sendItem } from './AddItem.saga'

export default function* rootSaga() {
  yield all([sendItem()])
}
