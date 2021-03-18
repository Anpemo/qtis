import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import Welcome from './Welcome'

describe('Given an Welcome function', () => {
  afterEach(cleanup)
  describe('When pressing on GO TO YOUR PROFILE', () => {
    test('Then it should navigate', () => {
      const navigate = jest.fn()
      const { getByText } = render(<Welcome navigation={{ navigate }} />)
      fireEvent.press(getByText('GO TO YOUR PROFILE'))
      expect(navigate).toHaveBeenCalledWith('Profile')
    })
  })
})
