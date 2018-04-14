import {
    createStore, 
    combineReducers, 
    applyMiddleware
} from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
// reducers imports

import CounterReducer from './CounterReducer'

const reducers = combineReducers({
    CounterReducer
})

const middlewares = __DEV__ 
    ? applyMiddleware(logger, thunk)
    : applyMiddleware(thunk)

export default createStore(reducers, middlewares)