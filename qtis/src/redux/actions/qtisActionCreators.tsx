import qtisActionTypes from './qtisActionTypes'
import axios from 'axios'

export function userRegister (userData: any) {
  return async function fetchInfo (dispatch: any) {
    // const route = process.env.BACKEND_REGISTER
    const { data } = await axios.post('http://192.168.0.15:5000/auth/register', userData)
    if (data === 'User already exists') {
      dispatch({
        type: qtisActionTypes.USER_REGISTER
      })
    } else {
      dispatch({
        type: qtisActionTypes.USER_REGISTER,
        data
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
    console.log(headers)
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
