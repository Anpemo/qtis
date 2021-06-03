import actionTypes from '../actions/qtisActionTypes'
import { AnyAction } from 'redux'

export default function productsReducer (state = { product: {}, products: [] }, action: AnyAction) {
  switch (action.type) {
    case actionTypes.PRODUCTS_LIST:
      return { ...state, products: action.data }

    case actionTypes.SINGLE_PRODUCT:
      return { ...state, product: action.data }

    case actionTypes.CREATE_PRODUCT:
      return state

    case actionTypes.CLEAN_PRODUCT:
      return { ...state, product: action.data }

    default:
      return state
  }
}
