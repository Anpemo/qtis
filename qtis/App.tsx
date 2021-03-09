import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AppCover } from './src/screens'

const Stack = createStackNavigator()

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={AppCover}>
        <Stack.Screen name="AppCover" component={AppCover}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
