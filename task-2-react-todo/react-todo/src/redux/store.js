import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import userTaskReducers from './reducers'

export default createStore(userTaskReducers, composeWithDevTools()) ;
