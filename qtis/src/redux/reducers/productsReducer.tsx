import actionTypes from '../actions/qtisActionTypes'

export default function productsReducer (state = { product: {}, products: {} }, action: any) {
  switch (action.type) {
    case actionTypes.PRODUCTS_LIST:
      return { ...state, products: action.data }

    case actionTypes.SINGLE_PRODUCT:
      return { ...state, product: action.data }

    case actionTypes.CREATE_PRODUCT:
      return state

    default:
      return state
  }
}
