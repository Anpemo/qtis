import actionTypes from '../actions/qtisActionTypes'

export default function userReducer (state = { user: {} }, action: any) {
  switch (action.type) {
    case actionTypes.USER_REGISTER:
      return { ...state, user: action.data }

    default:
      return state
  }
}
