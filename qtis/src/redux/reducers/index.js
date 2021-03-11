import { combineReducers } from 'redux'
import productsReducers from './productsReducers'
import reviewReducers from './reviewReducers'
import userReducers from './userReducers'

const rootReducer = combineReducers({
  productsReducers,
  reviewReducers,
  userReducers
})

export default rootReducer
