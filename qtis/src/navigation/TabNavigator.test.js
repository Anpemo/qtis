import React from 'react'
import TabNavigator from './TabNavigator'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Given a TabNavigator', () => {
  let component
  beforeEach(() => {
    const mockStore = configureStore()
    component = (
        <Provider store = {
          mockStore()
        }>

        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
        </Provider>
    )
  })
  describe('When calling it', () => {
    test('Then it will match the snapshot', () => {
      const tabNavigator = render(component)
      expect(tabNavigator).toMatchSnapshot()
    })
  })
})
