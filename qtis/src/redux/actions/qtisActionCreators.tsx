import qtisActionTypes from './qtisActionTypes'
import axios from 'axios'

export function userRegister (userData: any) {
  return async function fetchInfo (dispatch: any) {
    // const route = process.env.BACKEND_REGISTER
    const { data } = await axios.post('http://192.168.0.15:5000/auth/register', userData)
    if (data === 'User alreade exists') {
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
  console.log(category)
  return async function fetchInfo (dispatch: any) {
    const { data } = await axios.get(`http://192.168.0.15:5000/product/${category}`)
    console.log(data)
    dispatch({
      type: qtisActionTypes.PRODUCTS_LIST,
      data
    })
  }
}
