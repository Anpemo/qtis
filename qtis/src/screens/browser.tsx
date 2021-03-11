import React from 'react'
import {
  Image, StyleSheet, TouchableOpacity, View, Text
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, images, SIZES, SHADOW } from '../../constants'

export default function Browser () {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10
    },
    title: {
      color: COLORS.black,
      fontSize: SIZES.h3,
      margin: 10,
      padding: 5
    },
    categoryBox: {
      height: SIZES.height * 0.4,
      width: SIZES.width * 0.43,
      borderRadius: SIZES.squareRadius,
      margin: 20,
      ...SHADOW

    },
    categoryPicture: {
      height: SIZES.height * 0.4,
      width: '100%',
      resizeMode: 'cover',
      borderRadius: SIZES.squareRadius

    },
    textContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      position: 'absolute',
      bottom: 0,
      height: '50%',
      width: '100%',
      backgroundColor: COLORS.categoryTextBackground,
      borderRadius: SIZES.squareRadius
    },
    categoryText: {
      fontSize: SIZES.p20,
      color: COLORS.brown,
      alignSelf: 'center',
      justifyContent: 'flex-end',
      marginBottom: 10,
      fontFamily: 'MontserratBold'
    }
  })
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CHOOSE A CATEGORY</Text>
      <View>
      <TouchableOpacity style={styles.categoryBox}>
        <View>
          <Image source={images.soapsCategory} style={styles.categoryPicture} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.categoryText}>SOAPS</Text>
        </View>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
