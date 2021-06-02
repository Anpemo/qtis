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

describe('Given a fetchProducts function', () => {
  describe('When calling it with a category existent in backend', () => {
    beforeEach(() => {
      axios.get.mockResolvedValue({ data: { productName: 'Ives', category: 'crema' } })
    })
    test('Then it will dispatch data: data', async () => {
      const response = { data: { productName: 'Ives', category: 'crema' } }

      const action = {
        type: qtisActionTypes.PRODUCTS_LIST,
        data: response.data
      }

      const dispatch = jest.fn()
      await fetchProducts({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})


describe('Given a fetchProduct function', () => {
  describe('When calling it with userData existent in backend', () => {
    test('Then it will dispatch data: data', async () => {
      axios.get.mockResolvedValue({ headers: { date: null }, data: [{ productName: 'Ives', category: 'crema' }, { productName: 'clarins', category: 'crema' }] })

      const dispatch = jest.fn()
      await fetchProduct('asdasdkb5')(dispatch)
      expect(dispatch).toHaveBeenCalled()
    })
  })
})

describe('Given a fetchProduct function', () => {
  describe('When calling it with userData non-existent in backend', () => {
    beforeEach(() => {
      axios.get.mockRejectedValue('Error')
    })
    test('Then it will dispatch data: product does not exist', async () => {
      const dispatch = jest.fn()
      await fetchProduct({})(dispatch)
      expect(dispatch).toHaveBeenCalled()
    })
  })
})

describe('Given a createProduct function', () => {
  describe('When calling it with userData existent in backend', () => {
    beforeEach(() => {
      axios.post.mockResolvedValue({ data: { productName: 'Ives', category: 'crema' } })
    })
    test('Then it will dispatch data: data', async () => {
      const response = { data: { productName: 'Ives', category: 'crema' } }

      const action = {
        type: qtisActionTypes.CREATE_PRODUCT,
        data: response.data
      }

      const dispatch = jest.fn()
      await createProduct({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a cleanProduct function', () => {
  describe('When calling it without arguments', () => {
    test('Then it will return data: null', () => {
      const response = cleanProduct()
      expect(response).toStrictEqual({
        type: qtisActionTypes.CLEAN_PRODUCT,
        data: response.data
      })
    })
  })
})

describe('Given a fetchReviews function', () => {
  describe('When calling it with a parameter', () => {
    beforeEach(() => {
      axios.get.mockResolvedValue({ data: { productName: 'Ives', category: 'crema' } })
    })
    test('Then it will dispatch data: data', async () => {
      const response = { data: { productName: 'Ives', category: 'crema' } }

      const action = {
        type: qtisActionTypes.REVIEWS_LIST,
        data: response.data
      }

      const dispatch = jest.fn()
      await fetchReviews({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a createReview function', () => {
  describe('When calling it with a parameter', () => {
    beforeEach(() => {
      axios.post.mockResolvedValue({ data: { productName: 'Ives', category: 'crema' } })
    })
    test('Then it will dispatch data: data', async () => {
      const response = { data: { productName: 'Ives', category: 'crema' } }

      const action = {
        type: qtisActionTypes.CREATE_REVIEW,
        data: response.data
      }

      const dispatch = jest.fn()
      await createReview({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a updateUser function', () => {
  describe('When calling it with a parameter', () => {
    beforeEach(() => {
      axios.put.mockResolvedValue({ data: { productName: 'Ives', category: 'crema' } })
    })
    test('Then it will dispatch data: data', async () => {
      const response = { data: { productName: 'Ives', category: 'crema' } }

      const action = {
        type: qtisActionTypes.UPDATE_USER,
        data: response.data
      }

      const dispatch = jest.fn()
      await updateUser({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})
