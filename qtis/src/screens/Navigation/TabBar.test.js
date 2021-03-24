import React from 'react'
import TabBar from './TabBar'
import { cleanup, fireEvent, render } from '@testing-library/react-native'

describe('Given a TabBar component', () => {
  let component
  const navigate = jest.fn()
  const routes = [
    { name: 'Browser', params: { icon: 'search1' }, key: 1 },
    { name: 'Scanner', params: { icon: 'barcode-scan' }, key: 2 },
    { name: 'Profile', params: { icon: 'user' }, key: 3 }
  ]
  beforeEach(() => {
    component = (
                  <TabBar navigation={{ navigate }} state={{ routes }} />
    )
  })
  afterEach(cleanup)
  describe('When calling it', () => {
    test('Then it will match the snapshot', () => {
      const tabBar = render(component)
      expect(tabBar).toMatchSnapshot()
    })
    test('Then it will render a search', () => {
      const { getAllByTestId } = render(component)
      const tabID = getAllByTestId('tabContainer')[0]
      fireEvent.press(tabID)
      expect(tabID).toHaveBeenCalled()
    })
  })
})
