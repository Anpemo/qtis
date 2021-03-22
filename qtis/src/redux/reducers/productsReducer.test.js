import productsReducer from './productsReducer'
import actionTypes from '../actions/qtisActionTypes'

describe('Given a productsReducer', () => {
  describe('When it has an action.data', () => {
    test('Then will return action.data if type is product_list', () => {
      const action = {
        type: actionTypes.PRODUCTS_LIST,
        data: 'hola'
      }
      const state = { products: [] }
      const data = productsReducer(state, action)

      expect(data).toStrictEqual({ products: 'hola' })
    })
    test('Then will return action.data if type is SINGLE_PRODUCT', () => {
      const action = {
        type: actionTypes.SINGLE_PRODUCT,
        data: 'hola'
      }
      const state = { product: {} }
      const data = productsReducer(state, action)

      expect(data).toStrictEqual({ product: 'hola' })
    })
    test('Then will return action.data if type is CREATE_PRODUCT', () => {
      const action = {
        type: actionTypes.CREATE_PRODUCT,
        data: 'hola'
      }
      const state = {}
      const data = productsReducer(state, action)

      expect(data).toStrictEqual({})
    })
    test('Then will return action.data if type is CLEAN_PRODUCT', () => {
      const action = {
        type: actionTypes.CLEAN_PRODUCT,
        data: 'hola'
      }
      const state = {}
      const data = productsReducer(state, action)

      expect(data).toStrictEqual({ product: 'hola' })
    })
    test('Then will return action.data if type is null', () => {
      const action = {
        type: '',
        data: 'hola'
      }
      const state = {}
      const data = productsReducer(state, action)

      expect(data).toStrictEqual({})
    })
  })
})
