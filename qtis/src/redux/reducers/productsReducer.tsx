import actionTypes from '../actions/qtisActionTypes'

export default function productsReducer (state = { product: {}, products: {} }, action: any) {
  switch (action.type) {
    case actionTypes.PRODUCTS_LIST:
      return { ...state, products: action.data }
    case actionTypes.SINGLE_PRODUCT:
      console.log('reducerr', action.data)
      return { ...state, product: action.data }

    default:
      return state
  }
}
