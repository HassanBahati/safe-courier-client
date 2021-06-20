import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import orderReducer from './orderReducer'

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    order: orderReducer
})