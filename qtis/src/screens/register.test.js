import { cleanup, fireEvent, render } from '@testing-library/react-native'
import Register from './register'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../redux/stores/configureStore'
import * as actions from '../redux/actions/qtisActionCreators'
jest.mock('../redux/actions/qtisActionCreators')

describe('Given a register component', () => {
  afterEach(() => {
    cleanup()
  })

  describe('When writing on inputs', () => {
    let component
    beforeEach(() => {
      const store = configureStore
      component = (
          <Provider store={store}><Register /></Provider>
      )
    })
    test('Then userName will change', () => {
      const { getByPlaceholderText } = render(component)

      const userNameInput = getByPlaceholderText('What\'s your name?')
      const newValue = 'newValue'
      fireEvent.changeText(userNameInput, newValue)
      expect(userNameInput.props.value).toBe(newValue)
    })
    test('Then email will change', () => {
      const { getByPlaceholderText } = render(component)

      const emailInput = getByPlaceholderText('Email')
      const newValue = 'alegnapm@gmail.com'
      fireEvent.changeText(emailInput, newValue)
      expect(emailInput.props.value).toBe(newValue)
    })
    test('Then password will change', () => {
      const { getByPlaceholderText } = render(component)

      const passwordInput = getByPlaceholderText('Password')
      const newValue = 'a1234567'
      fireEvent.changeText(passwordInput, newValue)
      expect(passwordInput.props.value).toBe(newValue)
    })
    test('Then confirmpassword will change', () => {
      const { getByPlaceholderText } = render(component)
      const confirmpasswordInput = getByPlaceholderText('Confirm Pasword')
      const newValue = 'a1234567'
      fireEvent.changeText(confirmpasswordInput, newValue)
      expect(confirmpasswordInput.props.value).toBe(newValue)
    })
  })
  describe('When pressing on back button', () => {
    test('Then it will navigate', () => {
      const store = configureStore
      const goBack = jest.fn()
      const component = (
          <Provider store={store}><Register navigation={{ goBack }}/></Provider>
      )
      const { getByTestId } = render(component)
      const backButton = getByTestId('backButton')
      fireEvent.press(backButton)
      expect(goBack).toHaveBeenCalled()
    })
  })
  describe('When pressing the registe onPress', () => {
    test('Then it will call userRegister with email', () => {
      jest.spyOn(actions, 'userRegister').mockReturnValue({ type: '' })
      const store = configureStore
      const component = (
          <Provider store={store}><Register /></Provider>
      )
      const { getByText } = render(component)
      fireEvent.press(getByText('REGISTER'))
      expect(actions.userRegister).toHaveBeenCalled()
    })
  })
})
