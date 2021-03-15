import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Browser, Profile, TabBar } from '../screens'

const Tab = createBottomTabNavigator()

function TabNavigator () {
  return (
      <Tab.Navigator tabBar ={props => <TabBar {...props} />}>
          <Tab.Screen name='Browser' component={Browser} initialParams={{ icon: 'search1' }}/>
          <Tab.Screen name='Profile' component={Profile} initialParams={{ icon: 'user' }}/>
      </Tab.Navigator>
  )
}

export default TabNavigator
