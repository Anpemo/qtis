import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import { Browser } from '../screens'
import { COLORS } from '../../constants'

const Tab = createBottomTabNavigator()

function Tabs () {
  return (
        <Tab.Navigator>
            <Tab.Screen/>
        </Tab.Navigator>

  )
}

export default Tabs
/*
                name="Browser"
                component="Browser"
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.black
                            }} */
