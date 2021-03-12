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
      const mockData = [
        {
          id: 1
        }
      ]
      const navigate = jest.fn()
      const { getByTestId } = render(<Browser navigation={{ navigate }} />)
      const flatList = getByTestId('flatlistTest')
      const item = flatList.renderProp('renderItem')
      fireEvent.press(getByTestId(1))
      expect(navigate).toHaveBeenCalledWith('CategoryBrowser')
    })
  })
})
