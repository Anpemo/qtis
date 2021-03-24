import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import Welcome from './Welcome'

const mockedNavigate = jest.fn()
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate
    })
  }
})
describe('Given an Welcome function', () => {
  let component
  const userName = 'Angela'
  beforeEach(() => {
    component = (<Welcome route={{ params: { userName } }} />)
  })
  afterEach(() => {
    cleanup()
  })

  describe('When pressing on GO TO YOUR PROFILE', () => {
    test('Then it should navigate', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('test-login'))
      expect(mockedNavigate).toHaveBeenCalled()
    })
  })
})
