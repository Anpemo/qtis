import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Reviews from './Reviews'
import * as actions from '../../redux/actions/qtisActionCreators'
jest.mock('../../redux/actions/qtisActionCreators')

const mockedNavigate = jest.fn()
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate
    })
  }
})

describe('Given an Reviews function rendered from productDetail', () => {
  let componentFromProduct

  beforeEach(() => {
    const mockStore = configureStore()
    componentFromProduct = (
      <Provider store={mockStore({
        reviewsReducer: {
          reviews: [
            {
              brandName: 'Ives',
              userPicture: 'Crema facial',
              rating: 19,
              productCategory: 'creams',
              skinType: 'Normal',
              _id: 1
            },
            {
              brandName: 'Ives',
              userPicture: 'Crema facial',
              rating: 19,
              productCategory: 'creams',
              skinType: 'Normal',
              _id: 2

            }
          ]

        }
      })}>
        <Reviews parameter = {123123} />
        </Provider>
    )
    jest.spyOn(actions, 'fetchReviews').mockReturnValue({ type: '' })
  })

  afterEach(cleanup)

  describe('When rendering it from product && pressing to plus icon', () => {
    test('Then it will navigate', () => {
      const { getByTestId } = render(componentFromProduct)
      const navigateButton = getByTestId('navigateAddReview')
      fireEvent.press(navigateButton)
      expect(mockedNavigate).toHaveBeenCalled()
    })
  })
  describe('When rendering it from product && skinTypeButton', () => {
    test('Then it will setFiltered to false', () => {
      const renderedComponent = render(componentFromProduct)
      const skinTypeButton = renderedComponent.getAllByTestId('skinTypeButton')[0]
      fireEvent.press(skinTypeButton)
      expect(renderedComponent).toMatchSnapshot()
    })
    test('Then it will setFiltered to true', () => {
      const renderedComponent = render(componentFromProduct)
      const skinTypeButton = renderedComponent.getAllByTestId('skinTypeButton')[1]
      fireEvent.press(skinTypeButton)
      expect(renderedComponent).toMatchSnapshot()
    })
  })
  describe('When rendering it from product && reviews has no length', () => {
    test('Then it will render there are no reviews', () => {
      const mockStore = configureStore()

      componentFromProduct = (
        <Provider store={mockStore({
          reviewsReducer: {
            reviews: []
          }
        })}>
          <Reviews parameter = {123123} />
          </Provider>
      )

      const { getByTestId } = render(componentFromProduct)
      const container = getByTestId('valorationContainer')
      expect(container).toBeTruthy()
    })
  })
})
describe('Given an Reviews function rendered from profile', () => {
  let componentFromProfile
  beforeEach(() => {
    const mockStore = configureStore()

    componentFromProfile = (
    <Provider store={mockStore({
      reviewsReducer: {
        reviews: [
          {
            brandName: 'Ives',
            userPicture: 'Crema facial',
            rating: 19,
            productCategory: 'creams',
            _id: 1,
            skinType: 'Normal'
          },
          {
            brandName: 'Ives',
            userPicture: 'Crema facial',
            rating: 19,
            productCategory: 'creams',
            _id: 2,
            skinType: 'Normal'

          }
        ]

      }
    })}>
      <Reviews parameter = {'aaa'} />
      </Provider>
    )
    jest.spyOn(actions, 'fetchReviews').mockReturnValue({ type: '' })
  })
  afterEach(cleanup)

  describe('When rendering it', () => {
    test('Then profileProductName will be true', () => {
      const { getAllByTestId } = render(componentFromProfile)
      const productName = getAllByTestId('profileProductName')[0]
      expect(productName).toBeTruthy()
    })
  })
})
