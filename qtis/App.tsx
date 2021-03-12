import 'react-native-gesture-handler'
import React from 'react'
import { useFonts } from '@use-expo/font'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import {
  AppCover, Login, Register, Browser, Profile, CategoryBrowser
} from './src/screens'

const Stack = createStackNavigator()
function App () {
  const customFonts = {
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf')
  }
  const [isLoaded] = useFonts(customFonts)
  if (!isLoaded) {
    return <AppLoading />
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Browser"
      >
        <Stack.Screen name="AppCover" component={AppCover} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Browser" component={Browser} />
        <Stack.Screen name="CategoryBrowser" component={CategoryBrowser} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
