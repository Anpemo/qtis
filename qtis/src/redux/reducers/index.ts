import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import reviewsReducer from './reviewsReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  productsReducer,
  reviewsReducer,
  userReducer
})

export default rootReducer
