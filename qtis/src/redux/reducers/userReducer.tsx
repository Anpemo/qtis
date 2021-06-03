import qtisActionTypes from '../actions/qtisActionTypes'
import { AnyAction } from 'redux'

export default function userReducer (state = { user: {} }, action: AnyAction) {
  switch (action.type) {
    case qtisActionTypes.USER_REGISTER:
      return { ...state, user: action.data }

    case qtisActionTypes.USER_LOGIN:
      return { ...state, user: action.data }

    case qtisActionTypes.UPDATE_USER:
      return { ...state, user: action.data }

    default:
      return state
  }
}
