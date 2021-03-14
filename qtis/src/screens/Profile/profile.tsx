import React from 'react'
import {
  Image, StyleSheet, TouchableOpacity, View, Text, ImageBackground, FlatList
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, SHADOW, images, BORDER } from '../../../constants'
import skinTypes from '../../../constants/skinTypes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  header: {
    flex: 0.4,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  },
  pictureBox: {
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 100,
    marginBottom: -50
  },
  productPicture: {
    height: 125,
    width: 125,
    resizeMode: 'cover',
    borderRadius: 100,
    backgroundColor: COLORS.white
  },
  body: {
    flex: 1,
    width: '95%',
    alignItems: 'center',
    marginTop: 50
  },
  productInformation: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '95%',
    marginTop: 10,
    borderRadius: SIZES.squareRadius,
    ...SHADOW
  },
  userName: {
    fontSize: SIZES.p20,
    color: COLORS.black,
    alignSelf: 'center',
    fontFamily: 'MontserratBold'
  },
  userData: {
    fontSize: SIZES.p20,
    color: COLORS.black,
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    marginTop: 5
  }
})

export default function Profile () {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.profileHeader} style={styles.header} >
         <View style={styles.pictureBox}>
            <Image
            source={images.coverGirl}
            style={styles.productPicture} key={1}
            />
         </View>
      </ImageBackground>
      <View style={styles.body}>
        <View style={styles.productInformation}>
        <Text style={styles.userName}>Angela Pedrero
          </Text>
          <Text style={styles.userData}>26 years old
          </Text>
          <Text style={styles.userData}>Barcelona
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
