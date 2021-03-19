import actionTypes from '../actions/qtisActionTypes'

export default function reviewsReducer (state = { reviews: {} }, action: any) {
  switch (action.type) {
    case actionTypes.REVIEWS_LIST:
      return { ...state, reviews: action.data }

    default:
      return state
  }
}
