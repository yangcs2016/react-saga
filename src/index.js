import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './sagas'

const sagaMiddleware=createSagaMiddleware()
const store=createStore(
    rootReducer,    
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
)
//监听saga异步函数
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
serviceWorker.unregister();
