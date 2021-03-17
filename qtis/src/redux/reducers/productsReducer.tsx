import actionTypes from '../actions/qtisActionTypes'

export default function productsReducer (state = { product: {}, products: {} }, action: any) {
  switch (action.type) {
    case actionTypes.PRODUCTS_LIST:
      return { ...state, products: action.data }

    default:
      return state
  }
}
