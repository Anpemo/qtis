import React from 'react'
import Tab from './Tab'
import { cleanup, render } from '@testing-library/react-native'

describe('Given a Tab component', () => {
  let component
  beforeEach(() => {
    component = (
              <Tab />
    )
  })
  afterEach(cleanup)
  describe('When calling it', () => {
    test('Then it will render a tabContainer', () => {
      const tabComponent = render(component)
      expect(tabComponent).toMatchSnapshot()
    })
  })
})
