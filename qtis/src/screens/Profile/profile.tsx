import React, { useState } from 'react'
import {
  Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity
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
  },
  accordionsBox: {
    width: '100%'
  },
  sectionContainer: {
    flexGrow: 1,
    width: '95%',
    justifyContent: 'center',
    margin: 5
  },
  section: {
    flexGrow: 1
  },
  sectionName: {
    fontFamily: 'MontserratBold',
    fontSize: SIZES.p18,
    lineHeight: 40,
    paddingLeft: 10,
    backgroundColor: COLORS.cream,
    marginBottom: 3
  },
  sectionContentBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    ...BORDER
  },
  skinTypesButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    marginLeft: 15,
    marginBottom: 3,
    borderRadius: SIZES.buttonRadius,
    ...BORDER
  },
  skinType: {
    fontSize: SIZES.p18,
    fontFamily: 'Montserrat'
  }
})

export default function Profile () {
  const [openSkinType, setOpenSkinType] = useState(false)
  const [openReviews, setOpenReviews] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)
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
      <View style={styles.accordionsBox}>
        <TouchableOpacity
        onPress={() => {
          setOpenSkinType(!openSkinType)
        }}
        style={styles.sectionContainer}
        activeOpacity={0.5}
        >
            <View style={styles.section}>
              <Text style={styles.sectionName}>SKIN TYPE</Text>
              <View style={styles.sectionContentBox}>
                {openSkinType && skinTypes.map((skinType) => (
                  <TouchableOpacity
                  key={skinType}
                  activeOpacity={0.5}
                  style={styles.skinTypesButton}
                  >
                    <Text style={styles.skinType}>{skinType}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
          setOpenReviews(!openReviews)
        }}
        style={styles.sectionContainer}
        activeOpacity={0.5}
        >
            <View style={styles.section}>
              <Text style={styles.sectionName}>YOUR REVIEWS</Text>
              <View style={styles.sectionContentBox}>
                {openReviews && skinTypes.map((skinType) => (
                  <TouchableOpacity
                  key={skinType}
                  activeOpacity={0.8}
                  >
                    <Text>{skinType}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
          setOpenSettings(!openSettings)
        }}
        style={styles.sectionContainer}
        activeOpacity={0.5}
        >
            <View style={styles.section}>
              <Text style={styles.sectionName}>ACCOUNT SETTINGS</Text>
              <View >
                {openSettings && skinTypes.map((skinType) => (
                  <TouchableOpacity
                  key={skinType}
                  activeOpacity={0.8}

                  >
                    <Text>{skinType}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}
