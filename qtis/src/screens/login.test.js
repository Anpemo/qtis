import { cleanup, fireEvent, render } from '@testing-library/react-native'
import Login from './Login'
import React from 'react'

describe('Given a login component', () => {
  afterEach(cleanup)
  describe('When writing on the inputs', () => {
    test('Then it should change the state of the email', () => {
      const { getByPlaceholderText } = render(<Login/>)
      const newValue = 'New value'
      const emailInput = getByPlaceholderText('Email')
      fireEvent.changeText(emailInput, newValue)
      expect(emailInput.props.value).toBe(newValue)
    })
    test('Then it should change the state of the password', () => {
      const { getByPlaceholderText } = render(<Login/>)
      const newValue = 'New value'
      const passwordInput = getByPlaceholderText('Password')
      fireEvent.changeText(passwordInput, newValue)
      expect(passwordInput.props.value).toBe(newValue)
    })
  })
})
