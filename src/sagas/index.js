import {all,fork} from 'redux-saga/effects'
//import {watchFetchUser,watchFetchTodos} from './user'
import * as userSagas from './user'
import * as counterSagas from './counter'

export function *rootSaga() {
  yield all([
    ...Object.values(userSagas),
    ...Object.values(counterSagas)
  ].map(fork))
}