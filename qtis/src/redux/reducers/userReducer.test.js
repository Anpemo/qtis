import userReducer from './userReducer'
import actionTypes from '../actions/qtisActionTypes'

describe('Given a userReducer', () => {
  describe('When it has an action.data', () => {
    test('Then will return action.data if type is USER_REGISTER', () => {
      const action = {
        type: actionTypes.USER_REGISTER,
        data: 'hola'
      }
      const state = { user: {} }
      const data = userReducer(state, action)

      expect(data).toStrictEqual({ user: 'hola' })
    })
    test('Then will return action.data if type is USER_LOGIN', () => {
      const action = {
        type: actionTypes.USER_LOGIN,
        data: 'hola'
      }
      const state = { user: {} }
      const data = userReducer(state, action)

      expect(data).toStrictEqual({ user: 'hola' })
    })
    test('Then will return action.data if type is UPDATE_USER', () => {
      const action = {
        type: actionTypes.UPDATE_USER,
        data: 'hola'
      }
      const state = { user: {} }
      const data = userReducer(state, action)

      expect(data).toStrictEqual({ user: 'hola' })
    })
    test('Then will return action.data if type is null', () => {
      const action = {
        type: '',
        data: 'hola'
      }
      const state = { user: {} }
      const data = userReducer(state, action)

      expect(data).toStrictEqual({ user: {} })
    })
  })
})
