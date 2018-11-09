import {takeEvery,call,put} from 'redux-saga/effects'
import {FETCH_USER_REQUEST,FETCH_TODOS_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from '../constants/user'
import axios from 'axios'

function *fetchUser(){
  try{
    const user=yield call(axios.get,'https://jsonplaceholder.typicode.com/users')
    yield put({type:FETCH_USER_SUCCESS,user:user})
  }catch(error){
    yield put({type:FETCH_USER_FAILURE,error:error.message})
}
  
}

export function *watchFetchUser() {
  //不会中断多次提交，每次都执行
   yield takeEvery(FETCH_USER_REQUEST,fetchUser)
}

function *fetchTodos(){
    const todos=yield call(axios.get,'https://jsonplaceholder.typicode.com/todos')
    console.log(todos)
  }

export function *watchFetchTodos() {
    //不会中断多次提交，每次都执行
     yield takeEvery(FETCH_TODOS_REQUEST,fetchTodos)
}