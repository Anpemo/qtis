import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import Welcome from './Welcome'

describe('Given an Welcome function', () => {
  let component
  const navigate = jest.fn()
  const userName = 'Angela'
  beforeEach(() => {
    component = (<Welcome route={{ params: { userName } }} navigation={{ navigate }}/>)
  })
  afterEach(() => {
    cleanup()
  })

  describe('When pressing on GO TO YOUR PROFILE', () => {
    test('Then it should navigate', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('test-login'))
      expect(navigate).toHaveBeenCalled()
    })
  })
})
