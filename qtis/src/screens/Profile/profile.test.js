import { cleanup, fireEvent, render } from '@testing-library/react-native'
import Profile from './profile'
import React from 'react'
import { Provider } from 'react-redux'
import { Alert } from 'react-native'
import configureStore from 'redux-mock-store'
import * as actions from '../../redux/actions/qtisActionCreators'
// import * as ImagePicker from '../ImagePicker'
jest.mock('../../redux/actions/qtisActionCreators')

describe('Given a Profile component', () => {
  let component
  const navigate = jest.fn()
  const goBack = jest.fn()
  const params = 123123123

  beforeEach(() => {
    const mockStore = configureStore()

    component = (
          <Provider store={mockStore({ userReducer: { user: {} } })}><Profile navigation={{ navigate, goBack }} route={{ params }} /></Provider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  describe('When pressing on openSkinType', () => {
    test('Then productName will change', () => {
      const { getByPlaceholderText } = render(component)
      const productNameInput = getByPlaceholderText('Product Name')
      const newValue = 'newValue'
      fireEvent.changeText(productNameInput, newValue)
      expect(productNameInput.props.value).toBe(newValue)
    })
  })
})
