import qtisActionTypes from './qtisActionTypes'
import axios from 'axios'

export default function userRegister (userData: any) {
  return async function fetchInfo (dispatch: any) {
    // const route = process.env.BACKEND_REGISTER
    const { data } = await axios.post('http://192.168.0.15:5000/auth/register', userData)
    dispatch({
      type: qtisActionTypes.USER_REGISTER,
      data
    })
  }
}
