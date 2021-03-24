import React from 'react'
import {
  Image, TouchableOpacity, View, Text
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import styles from './WelcomeStyles'

export default function Welcome ({ route, navigation }: any) {
  const userName = route.params
  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.oldLady} style={styles.backgroundPicture} />
      <Text style={styles.titleText}>{`Welcome, ${userName}`}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.button} onPress={() =>
          navigation.navigate('tabNavigator', { Screen: 'Profile' })}
        testID={'test-login'}>
          <Text style={styles.buttonText}>GO TO YOUR PROFILE</Text>
        </TouchableOpacity>
          <Text style={styles.bodyText}>AND START SHARING</Text>
      </View>
    </SafeAreaView>
  )
}
