import { combineReducers } from 'redux'
// import productsReducers from './productsReducers'
// import reviewsReducers from './reviewReducers'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  // productsReducer,
  // reviewsReducer,
  userReducer
})

export default rootReducer
