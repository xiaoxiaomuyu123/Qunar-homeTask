import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' ;
import {composeWithDevTools} from 'redux-devtools-extension'

import {articleInfoReducer} from './reducers'

export default createStore(
    articleInfoReducer,
    composeWithDevTools(applyMiddleware(thunk))
)