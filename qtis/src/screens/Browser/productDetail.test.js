import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ProductDetail from './productDetail'
import * as actions from '../../redux/actions/qtisActionCreators'

jest.mock('../../redux/actions/qtisActionCreators')

const mockedGoBack = jest.fn()
const mockedNavigate = jest.fn()

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      goBack: mockedGoBack,
      navigate: mockedNavigate
    })
  }
})

describe('Given a ProductDetail function', () => {
  let component
  let params
  beforeEach(() => {
    const mockStore = configureStore()
    params = { productBarCode: 123123123 }
    component = (
      <Provider store={mockStore({
        productsReducer: {
          product:
            {
              brandName: 'Ives',
              productName: 'Crema facial',
              price: 19,
              productCategory: 'creams'
            }

        },
        reviewsReducer: {
          reviews: [
            {
              brandName: 'Ives',
              userPicture: 'Crema facial',
              rating: 19,
              productCategory: 'creams',
              _id: 1
            },
            {
              brandName: 'Ives',
              userPicture: 'Crema facial',
              rating: 19,
              productCategory: 'creams',
              _id: 2
            }
          ]
        }
      })}>
        <ProductDetail route={{ params }} />
        </Provider>
    )
    jest.spyOn(actions, 'fetchReviews').mockReturnValue({ type: '' })
    jest.spyOn(actions, 'fetchProduct').mockReturnValue({ type: '' })
  })
  afterEach(cleanup)

  describe('pressing on going back button', () => {
    test('Then it will navigate', () => {
      const { getByTestId } = render(component)
      const backButton = getByTestId('backButton')
      fireEvent.press(backButton)
      expect(mockedGoBack).toHaveBeenCalled()
    })
  })
})
