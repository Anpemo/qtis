import { cleanup, fireEvent, render } from '@testing-library/react-native'
import Login from './Login'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import * as actions from '../redux/actions/qtisActionCreators'
import { Alert } from 'react-native'

jest.mock('../redux/actions/qtisActionCreators')

describe('Given a login component', () => {
  let component
  beforeEach(() => {
    const mockStore = configureStore()
    component = (
          <Provider store={mockStore({ userReducer: { user: {} } })}><Login /></Provider>
    )
  })
  afterEach(() => {
    cleanup()
  })
  describe('When writing on the inputs', () => {
    test('Then mail will change', () => {
      const { getByPlaceholderText } = render(component)

      const newValue = 'New value'
      const emailInput = getByPlaceholderText('Email')
      fireEvent.changeText(emailInput, newValue)
      expect(emailInput.props.value).toBe(newValue)
    })
    test('Then it should change the state of the password', () => {
      const { getByPlaceholderText } = render(component)
      const newValue = 'New value'
      const passwordInput = getByPlaceholderText('Password')
      fireEvent.changeText(passwordInput, newValue)
      expect(passwordInput.props.value).toBe(newValue)
    })
  })
  describe('When pressing on back button', () => {
    test('Then it will navigate', () => {
      const goBack = jest.fn()
      const mockStore = configureStore()
      component = (
          <Provider store={mockStore({ userReducer: { user: {} } })}><Login navigation={{ goBack }}/></Provider>
      )
      const { getByTestId } = render(component)
      const backButton = getByTestId('backButton')
      fireEvent.press(backButton)
      expect(goBack).toHaveBeenCalled()
    })
  })
  describe('When clicking on login', () => {
    test('Then it should navigate', () => {
      jest.spyOn(actions, 'userLogin').mockReturnValue({ type: '' })
      const navigate = jest.fn()
      const mockStore = configureStore()
      component = (
          <Provider store={mockStore({ userReducer: { user: {} } })}><Login navigation={{ navigate }}/></Provider>
      )
      const { getByTestId } = render(component)
      const button = getByTestId('loginButton')
      fireEvent.press(button)
      expect(actions.userLogin).toHaveBeenCalled()
    })
  })
  describe('When mocking the store', () => {
    test('Then it will navigate, if the store has a user with an email', () => {
      const navigate = jest.fn()
      const mockStore = configureStore()
      component = (
        <Provider store={mockStore({ userReducer: { user: { email: 'angela@gmail.com' } } })}><Login navigation={{ navigate }} /></Provider>
      )
      const { getByTestId } = render(component)
      const button = getByTestId('loginButton')
      fireEvent.press(button)
      expect(navigate).toHaveBeenCalled()
    })
    test('Then Alert.alert will be truthy, if the store has a user with 401', () => {
      const mockStore = configureStore()
      component = (
        <Provider store={mockStore({ userReducer: { user: 401 } })}><Login /></Provider>
      )
      const { getByTestId } = render(component)
      const button = getByTestId('loginButton')
      fireEvent.press(button)
      jest.spyOn(Alert, 'alert')
      expect(Alert.alert).toBeTruthy()
    })
  })
})
