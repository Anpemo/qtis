import qtisActionTypes from './qtisActionTypes'
import axios from 'axios'

export function userRegister (userData: any) {
  return async function fetchInfo (dispatch: any) {
    // const route = process.env.BACKEND_REGISTER
    try {
      const { data } = await axios.post('http://192.168.0.15:5000/auth/register', userData)

      dispatch({
        type: qtisActionTypes.USER_REGISTER,
        data: data
      })
    } catch {
      dispatch({
        type: qtisActionTypes.USER_REGISTER,
        data: 401
      })
    }
  }
}

export function userLogin (userData: any) {
  return async function fetchInfo (dispatch: any) {
    // const route = process.env.BACKEND_LOGIN
    try {
      const { data } = await axios.post('http://192.168.0.15:5000/auth/login', userData)
      dispatch({
        type: qtisActionTypes.USER_LOGIN,
        data: { data }
      })
    } catch {
      dispatch({
        type: qtisActionTypes.USER_LOGIN,
        data: 401
      })
    }
  }
}

export function fetchProducts (category: Object) {
  return async function fetchInfo (dispatch: any) {
    const { data } = await axios.get(`http://192.168.0.15:5000/product/${category}`)
    dispatch({
      type: qtisActionTypes.PRODUCTS_LIST,
      data
    })
  }
}

export function fetchProduct (barCodeData: any) {
  return async function fetchInfo (dispatch: any) {
    const { data, headers } = await axios.get(`http://192.168.0.15:5000/product/${barCodeData}`)
    if (data[0]?.productBarCode) {
      dispatch({
        type: qtisActionTypes.SINGLE_PRODUCT,
        data: data[0]
      })
    } else {
      dispatch({
        type: qtisActionTypes.SINGLE_PRODUCT,
        data: { data: 'Product does not exist', date: headers.date }
      })
    }
  }
}

export function createProduct (productData: any) {
  return async function fetchInfo (dispatch: any) {
    const { data } = await axios.post('http://192.168.0.15:5000/product', productData)
    dispatch({
      type: qtisActionTypes.CREATE_PRODUCT,
      data
    })
  }
}

export function cleanProduct () {
  return ({
    type: qtisActionTypes.CLEAN_PRODUCT,
    data: null
  })
}

export function fetchReviews (parameter: Object) {
  return async function fetchInfo (dispatch: any) {
    const { data } = await axios.get(`http://192.168.0.15:5000/review/${parameter}`)

    dispatch({
      type: qtisActionTypes.REVIEWS_LIST,
      data
    })
  }
}

export function createReview (reviewData: Object) {
  return async function fetchInfo (dispatch: any) {
    const { data } = await axios.post('http://192.168.0.15:5000/review', reviewData)
    dispatch({
      type: qtisActionTypes.CREATE_REVIEW,
      data
    })
  }
}

export function updateUser (userData: any) {
  return async function fetchInfo (dispatch: any) {
    const { data } = await axios.put('http://192.168.0.15:5000/user', userData)
    dispatch({
      type: qtisActionTypes.UPDATE_USER,
      data
    })
  }
}
