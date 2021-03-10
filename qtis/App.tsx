import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AppCover, SignIn, Register, Browser, Profile } from './src/screens'

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
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Browser" component={Browser}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
