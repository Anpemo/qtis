import { cleanup, fireEvent, render } from '@testing-library/react-native'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import React from 'react'
import App from './App'

describe('Given an App component', () => {
  let component
  beforeEach(() => {
    const mockStore = configureStore()
    component = (
          <Provider store={mockStore({})}><App /></Provider>
    )
  })
  afterEach(() => { cleanup() })
  describe('When calling it', () => {
    test('Then it will render a navigationContainer', () => {
      const data = render(component)
      expect(data).toMatchSnapshot()
    })
  })
})
