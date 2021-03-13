import React from 'react'
import { cleanup, render } from '@testing-library/react-native'
import CategoryBrowser from './CategoryBrowser'

describe('Given an CategoryBrowser function', () => {
  afterEach(cleanup)
  describe('When rendering it', () => {
    test('Then safeArea will render text: creams', () => {
      const params = {
        categoryName: 'creams'
      }
      const { getByText } = render(<CategoryBrowser route={{ params }}/>)
      const text = getByText('CREAMS')
      expect(text).toBeTruthy()
    })
  })
})
