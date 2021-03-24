import { cleanup, fireEvent, render } from '@testing-library/react-native'
import AddReview from './AddReview'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import * as actions from '../../redux/actions/qtisActionCreators'
jest.mock('../../redux/actions/qtisActionCreators')

describe('Given a AddReview component', () => {
  let component
  const navigate = jest.fn()
  const goBack = jest.fn()
  const params = 123123123

  beforeEach(() => {
    const mockStore = configureStore()

    component = (
          <Provider store={mockStore({ productsReducer: { product: {} }, userReducer: { user: {} } })}><AddReview navigation={{ navigate, goBack }} route={{ params }} /></Provider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  describe('When writing on inputs and pressing share', () => {
    test('Then actions.createReview will be called ', () => {
      jest.spyOn(actions, 'createReview').mockReturnValue({ type: '' })

      const { getByPlaceholderText, getByTestId } = render(component)
      // Write on rating
      const productNameInput = getByPlaceholderText('Rate from 1 to 5')
      const newRate = 'newRate'
      fireEvent.changeText(productNameInput, newRate)
      // Write on text review
      const textInput = getByPlaceholderText('Write your review')
      const newText = 'newText'
      fireEvent.changeText(textInput, newText)
      // Press on share
      const shareButton = getByTestId('shareButton')
      fireEvent.press(shareButton)
      expect(actions.createReview).toHaveBeenCalled()
    })
  })
  describe('When pressing on back button', () => {
    test('Then it will navigate', () => {
      const { getByTestId } = render(component)
      const backButton = getByTestId('backButton')
      fireEvent.press(backButton)
      expect(goBack).toHaveBeenCalled()
    })
  })
})
