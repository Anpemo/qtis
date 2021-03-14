import React from 'react'
import {
  Image, StyleSheet, TouchableOpacity, View, Text
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images, SIZES, COLORS } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backgroundPicture: {
    flex: 1,
    position: 'absolute',
    height: SIZES.height,
    resizeMode: 'contain'
  },
  titleText: {
    fontSize: SIZES.h2 * 1.2,
    fontFamily: 'Montserrat',
    marginTop: 20
  },
  buttonContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 40
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.buttonRadius,
    height: SIZES.buttonheight,
    width: SIZES.buttonwidth,
    marginTop: 10,
    backgroundColor: COLORS.black
  },
  buttonText: {
    fontSize: SIZES.buttonText,
    lineHeight: 22,
    fontFamily: 'Montserrat',
    fontWeight: '400',
    letterSpacing: 3,
    color: COLORS.white
  },
  bodyText: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.buttonheight,
    width: SIZES.buttonwidth,
    marginTop: 10,
    marginLeft: 25,
    fontSize: SIZES.buttonText,
    lineHeight: 22,
    fontFamily: 'MontserratBold',
    fontWeight: '400',
    letterSpacing: 3
  }
})

export default function Welcome ({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.oldLady} style={styles.backgroundPicture} />
      <Text style={styles.titleText}>Welcome, Ángela</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} testID={'test-login'}>
          <Text style={styles.buttonText}>GO TO YOUR PROFILE</Text>
        </TouchableOpacity>
          <Text style={styles.bodyText}>AND START SHARING</Text>
      </View>
    </SafeAreaView>
  )
}
