import qtisActionTypes from './qtisActionTypes'
import axios from 'axios'

export default function userRegister (userData: any) {
  return async function fetchInfo (dispatch: any) {
    // const route = process.env.BACKEND_REGISTER
    const { data } = await axios.post('http://192.168.0.15:5000/auth/register', userData)
    console.log(data)
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
