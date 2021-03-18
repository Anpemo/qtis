import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabNavigator from './TabNavigator'

describe('Given a TabNavigator component', () => {
  describe('When rendering it', () => {
    test('Then it will create a Tab.Screen', () => {
      const { getByRole } = render(<TabNavigator/>)
      const Browser = getByRole('Tab', { name })
    })
  })
})
