import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
// import reviewsReducers from './reviewReducers'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  productsReducer,
  // reviewsReducer,
  userReducer
})

export default rootReducer
