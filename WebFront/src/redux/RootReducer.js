import {combineReducers} from 'redux'

import userReducer from './user/UserReducer'
import cartReducer from './Cart/CartReducer'

export default combineReducers({
user:userReducer,
cart:cartReducer,

});