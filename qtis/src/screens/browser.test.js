import React from 'react'
import { cleanup, render } from '@testing-library/react-native'
import Browser from './Browser'

describe('Given an Browser function', () => {
  afterEach(cleanup)
  describe('When calling it', () => {
    test('Then it will return a <safeAreaView>', () => {
      const { getByText } = render(<Browser />)
      const text = getByText('CHOOSE A CATEGORY')
      expect(text).toBeTruthy()
    })
    // test('navigates on button register', () => {
    //   const navigate = jest.fn()
    //   const { getByText } = render(<Browser navigation={{ navigate }} />)
    //   fireEvent.press(getByText('REGISTER'))
    //   expect(navigate).toHaveBeenCalledWith('Register')
    // })
  })
})
