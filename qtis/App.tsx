import 'react-native-gesture-handler'
import React from 'react'
import { useFonts } from '@use-expo/font'
import { createStackNavigator } from '@react-navigation/stack'
import AppLoading from 'expo-app-loading'
import { Provider } from 'react-redux'
import store from './src/redux/stores/configureStore'
import {
  AppCover, Login, Register, CategoryBrowser, Welcome, ProductDetail
} from './src/screens'
import tabNavigation from './src/navigation/TabNavigation'
import { NavigationContainer } from '@react-navigation/native'

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
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="AppCover"
      >
        <Stack.Screen name="AppCover" component={AppCover} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="tabNavigation" component={tabNavigation} />
        <Stack.Screen name="CategoryBrowser" component={CategoryBrowser} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
export default App
