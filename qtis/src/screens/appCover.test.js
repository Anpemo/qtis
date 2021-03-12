import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import AppCover from './appCover'

describe('Given an AppCover function', () => {
  afterEach(cleanup)
  describe('When calling it', () => {
    test('Then it will return a <safeAreaView>', () => {
      const navigate = jest.fn()
      const { getByText } = render(<AppCover navigation={{ navigate }} />)
      fireEvent.press(getByText('LOGIN'))
      expect(navigate).toHaveBeenCalledWith('Login')
    })
    test('navigates on button register', () => {
      const navigate = jest.fn()
      const { getByText } = render(<AppCover navigation={{ navigate }} />)
      fireEvent.press(getByText('REGISTER'))
      expect(navigate).toHaveBeenCalledWith('Register')
    })
  })
})
