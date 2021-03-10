/* eslint-disable react/prop-types */
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
  logo: {
    width: '80%',
    resizeMode: 'contain'
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
    backgroundColor: COLORS.coverbutton
  },
  buttonText: {
    fontSize: SIZES.buttonText,
    lineHeight: 22,
    fontFamily: 'Montserrat',
    fontWeight: '400',
    letterSpacing: 3
  }
})

export default function AppCover ({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.coverGirl} style={styles.backgroundPicture} />
        <Image source={images.whiteLogo} style={styles.logo}/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
