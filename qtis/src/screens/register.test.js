import { cleanup, fireEvent, render } from '@testing-library/react-native'
import Register from './register'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import * as actions from '../redux/actions/qtisActionCreators'
jest.mock('../redux/actions/qtisActionCreators')

describe('Given a register component', () => {
  let component
  beforeEach(() => {
    const mockStore = configureStore()
    component = (
          <Provider store={mockStore({ userReducer: { user: {} } })}><Register /></Provider>
    )
  })
  afterEach(() => {
    cleanup()
  })

  describe('When writing on inputs', () => {
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
      const confirmpasswordInput = getByPlaceholderText('Confirm Password')
      const newValue = 'a1234567'
      fireEvent.changeText(confirmpasswordInput, newValue)
      expect(confirmpasswordInput.props.value).toBe(newValue)
    })
  })
  describe('When pressing on back button', () => {
    test('Then it will navigate', () => {
      const goBack = jest.fn()
      const mockStore = configureStore()
      component = (
          <Provider store={mockStore({ userReducer: { user: {} } })}><Register navigation={{ goBack }}/></Provider>
      )
      const { getByTestId } = render(component)
      const backButton = getByTestId('backButton')
      fireEvent.press(backButton)
      expect(goBack).toHaveBeenCalled()
    })
  })
  describe('When pressing the registe onPress', () => {
    test('Then it userRegister will be called', () => {
      jest.spyOn(actions, 'userRegister').mockReturnValue({ type: '' })

      const { getByTestId, getByPlaceholderText } = render(component)
      const userName = 'Angela'
      const email = 'ale@gmail.com'
      const password = 'A1234567'
      const confirmPassword = 'A1234567'
      fireEvent.changeText(getByPlaceholderText('What\'s your name?'), userName)
      fireEvent.changeText(getByPlaceholderText('Email'), email)
      fireEvent.changeText(getByPlaceholderText('Password'), password)
      fireEvent.changeText(getByPlaceholderText('Confirm Password'), confirmPassword)

      const button = getByTestId('registerButton')
      fireEvent.press(button)
      expect(actions.userRegister).toHaveBeenCalledWith({ email, password, userName })
    })
  })
})
