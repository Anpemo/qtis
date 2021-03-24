import reviewsReducer from './reviewsReducer'
import actionTypes from '../actions/qtisActionTypes'

describe('Given a reviewsReducer', () => {
  describe('When it has an action.data', () => {
    test('Then will return action.data if type is REVIEWS_LIST', () => {
      const action = {
        type: actionTypes.REVIEWS_LIST,
        data: 'hola'
      }
      const state = { reviews: [] }
      const data = reviewsReducer(state, action)

      expect(data).toStrictEqual({ reviews: 'hola' })
    })
    test('Then will return action.data if type is CREATE_REVIEW', () => {
      const action = {
        type: actionTypes.CREATE_REVIEW,
        data: 'hola'
      }
      const state = { reviews: [] }

      const data = reviewsReducer(state, action)

      expect(data).toStrictEqual(['hola'])
    })
    test('Then will return action.data if type is null', () => {
      const action = {
        type: '',
        data: 'hola'
      }
      const state = { reviews: [] }

      const data = reviewsReducer(state, action)

      expect(data).toStrictEqual({ reviews: [] })
    })
  })
})
