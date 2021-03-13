import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import Browser from './Browser'

describe('Given an Browser function', () => {
  afterEach(cleanup)
  describe('When calling it', () => {
    test('Then it will render a CHOOSE A CATEGORY string', () => {
      const { getByText } = render(<Browser />)
      const text = getByText('CHOOSE A CATEGORY')
      expect(text).toBeTruthy()
    })
    test('navigates on TouchableOpacity', () => {
      const navigate = jest.fn()
      const { getByText } = render(<Browser navigation={{ navigate }} />)
      fireEvent.press(getByText('CREAMS'))
      expect(navigate).toHaveBeenCalledWith('CategoryBrowser', { categoryName: 'creams' })
    })
  })
})
