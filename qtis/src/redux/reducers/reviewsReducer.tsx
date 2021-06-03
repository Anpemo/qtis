import actionTypes from '../actions/qtisActionTypes'
import { AnyAction } from 'redux'

export default function reviewsReducer (state = { reviews: [] }, action: AnyAction) {
  switch (action.type) {
    case actionTypes.REVIEWS_LIST:
      return { ...state, reviews: action.data }

    case actionTypes.CREATE_REVIEW:
      return [...state.reviews, action.data]

    default:
      return state
  }
}
