import {takeEvery,put,call} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {INCREMENT_ASYNC,INCREMENT} from '../constants/counter'

function *incrementAsync(){
  yield call(delay,2000)
  //用put发送action
  //yield put(increment())
  yield put({type:INCREMENT})
}

export default function *watchIncrementAsync() {
   //不会中断多次提交，每次都执行
    yield takeEvery(INCREMENT_ASYNC,incrementAsync)
}
