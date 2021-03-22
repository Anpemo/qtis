import {
  userRegister, userLogin, fetchProducts, fetchProduct, createProduct, cleanProduct, fetchReviews, createReview, updateUser
} from './qtisActionCreators'
import qtisActionTypes from './qtisActionTypes'
import axios from 'axios'
jest.mock('axios')

describe('Given a userRegister function', () => {
  describe('When calling it with userData existent in backend', () => {
    beforeEach(() => {
      axios.post.mockResolvedValue({ data: { email: 'angela@gmail.com', password: 'a111111' } })
    })
    test('Then it will dispatch data: data', async () => {
      const response = { data: { email: 'angela@gmail.com', password: 'a111111' } }

      const action = {
        type: qtisActionTypes.USER_REGISTER,
        data: response.data
      }

      const dispatch = jest.fn()
      await userRegister({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
  describe('When calling it with userData non-existent in backend', () => {
    beforeEach(() => {
      axios.post.mockRejectedValue('Error')
    })

    test('Then it will dispatch data: 401', async () => {
      const action = {
        type: qtisActionTypes.USER_REGISTER,
        data: 401
      }

      const dispatch = jest.fn()
      await userRegister({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a userLogin function', () => {
  describe('When calling it with userData existent in backend', () => {
    beforeEach(() => {
      axios.post.mockResolvedValue({ data: { email: 'angela@gmail.com', password: 'a111111' } })
    })
    test('Then it will dispatch data: data', async () => {
      const response = { data: { email: 'angela@gmail.com', password: 'a111111' } }

      const action = {
        type: qtisActionTypes.USER_LOGIN,
        data: response.data
      }

      const dispatch = jest.fn()
      await userLogin({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
  describe('When calling it with userData non-existent in backend', () => {
    beforeEach(() => {
      axios.post.mockRejectedValue('Error')
    })

    test('Then it will dispatch data: 401', async () => {
      const action = {
        type: qtisActionTypes.USER_LOGIN,
        data: 401
      }

      const dispatch = jest.fn()
      await userLogin({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a fetchProduct function', () => {
  describe('When calling it with userData existent in backend', () => {
    beforeEach(() => {
      axios.get.mockResolvedValue({ data: { email: 'angela@gmail.com', password: 'a111111' } })
    })
    test('Then it will dispatch data: data', async () => {
      const response = { data: { email: 'angela@gmail.com', password: 'a111111' } }

      const action = {
        type: qtisActionTypes.SINGLE_PRODUCT,
        data: response.data
      }

      const dispatch = jest.fn()
      await fetchProduct({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
  describe('When calling it with userData non-existent in backend', () => {
    beforeEach(() => {
      axios.get.mockRejectedValue('Error')
    })

    test('Then it will dispatch data: 401', async () => {
      const action = {
        type: qtisActionTypes.SINGLE_PRODUCT,
        data: { data: 'product does not exist', date: '' }
      }

      const dispatch = jest.fn()
      await fetchProduct({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})
