
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //异步处理
import reducer from './reducer'

const store = createStore(reducer,applyMiddleware(thunk))
export default store