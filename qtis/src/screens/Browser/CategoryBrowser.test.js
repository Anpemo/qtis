import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import CategoryBrowser from './CategoryBrowser'
import * as actions from '../../redux/actions/qtisActionCreators'
jest.mock('../../redux/actions/qtisActionCreators')

describe('Given an CategoryBrowser function', () => {
  let component
  let goBack
  let params
  let navigate
  beforeEach(() => {
    const mockStore = configureStore()
    goBack = jest.fn()
    navigate = jest.fn()
    params = { categoryName: 'creams' }
    component = (
      <Provider store={mockStore({
        productsReducer: {
          products: [
            {
              brandName: 'Ives',
              productName: 'Crema facial',
              price: 19,
              productCategory: 'creams'
            }
          ]
        }
      })}>
        <CategoryBrowser route={{ params }} navigation={{ goBack, navigate }} />
        </Provider>
    )
    jest.spyOn(actions, 'fetchProducts').mockReturnValue({ type: '' })
  })
  afterEach(cleanup)
  describe('pressing on going back button', () => {
    test('Then it will navigate', () => {
      const { getByTestId } = render(component)
      const backButton = getByTestId('backButton')
      fireEvent.press(backButton)
      expect(goBack).toHaveBeenCalled()
    })
  })
  describe('when rendering it with an array', () => {
    test('Then create a productLink', () => {
      const { getByTestId } = render(component)
      const productLink = getByTestId('productLink')
      fireEvent.press(productLink)
      expect(navigate).toHaveBeenCalled()
    })
  })
})
