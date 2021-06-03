import qtisActionTypes from './qtisActionTypes'
import axios from 'axios'
import serverUrls from '../../../constants/serverUrls'
import UserInterface from '../../Interfaces/UserInterface'
import ProductInterface from '../../Interfaces/ProductInterface'
import ReviewInterface from '../../Interfaces/ReviewInterface'
import { Dispatch } from 'react'
import { userRegisterAction, updateUserAction, createReviewAction, userLoginAction, fetchProductsAction, fetchProductAction, fetchReviewsAction, createProductAction } from '../../models'

export function userRegister (userData: UserInterface) {
  return async function fetchInfo (dispatch: Dispatch<userRegisterAction>) {
    try {
      const { data } = await axios.post(serverUrls.BACKEND_REGISTER, userData)

      dispatch({
        type: qtisActionTypes.USER_REGISTER,
        data
      })
    } catch {
      dispatch({
        type: qtisActionTypes.USER_REGISTER,
        data: 401
      })
    }
  }
}

export function userLogin (userData: UserInterface) {
  return async function fetchInfo (dispatch: Dispatch<userLoginAction>) {
    try {
      const { data } = await axios.post(serverUrls.BACKEND_LOGIN, userData)
      dispatch({
        type: qtisActionTypes.USER_LOGIN,
        data
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
  return async function fetchInfo (dispatch: Dispatch<fetchProductsAction>) {
    const { data } = await axios.get(`${serverUrls.PRODUCTS}${category}`)
    dispatch({
      type: qtisActionTypes.PRODUCTS_LIST,
      data
    })
  }
}

export function fetchProduct (barCodeData: String) {
  return async function fetchInfo (dispatch: Dispatch<fetchProductAction>) {
    let date
    try {
      const { data, headers } = await axios.get(`${serverUrls.PRODUCTS}${barCodeData}`)
      date = headers.date
      dispatch({
        type: qtisActionTypes.SINGLE_PRODUCT,
        data: data[0]
      })
    } catch {
      dispatch({
        type: qtisActionTypes.SINGLE_PRODUCT,
        data: { data: 'Product does not exist', date }
      })
    }
  }
}

export function createProduct (productData: ProductInterface) {
  return async function fetchInfo (dispatch: Dispatch<createProductAction>) {
    const { data } = await axios.post(serverUrls.PRODUCTS, productData)
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
  return async function fetchInfo (dispatch: Dispatch<fetchReviewsAction>) {
    const { data } = await axios.get(`${serverUrls.REVIEWS}${parameter}`)

    dispatch({
      type: qtisActionTypes.REVIEWS_LIST,
      data
    })
  }
}

export function createReview (reviewData: ReviewInterface) {
  return async function fetchInfo (dispatch: Dispatch<createReviewAction>) {
    const { data } = await axios.post(serverUrls.REVIEWS, reviewData)
    dispatch({
      type: qtisActionTypes.CREATE_REVIEW,
      data
    })
  }
}

export function updateUser (userData: UserInterface) {
  return async function fetchInfo (dispatch: Dispatch<updateUserAction>) {
    const { data } = await axios.put(serverUrls.UPDATE_USER, userData)
    dispatch({
      type: qtisActionTypes.UPDATE_USER,
      data
    })
  }
}
