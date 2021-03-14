import React from 'react'
import {
  Image, StyleSheet, TouchableOpacity, View, Text, ImageBackground, FlatList
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, SHADOW, images, BORDER } from '../../../constants'
import skinTypes from '../../../constants/skinTypes'
import categories from '../../../constants/categories'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white
  },
  header: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 200
  },
  pictureBox: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 175,
    width: 175,
    marginLeft: 10,
    borderRadius: 100,
    backgroundColor: COLORS.pictureBoxBackground,
    marginTop: 10
  },
  productPicture: {
    height: 125,
    width: 125,
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 100,
    backgroundColor: COLORS.white
  },
  body: {
    flex: 1,
    width: '95%',
    alignItems: 'center'
  },
  productInformation: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: '10%',
    width: '95%',
    marginBottom: 15,
    marginTop: -90,
    borderRadius: SIZES.squareRadius,
    ...SHADOW
  },
  productNameText: {
    fontSize: SIZES.p20,
    color: COLORS.black,
    alignSelf: 'center',
    fontFamily: 'MontserratBold'
  },
  productDetailsText: {
    fontSize: SIZES.p20,
    color: COLORS.black,
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    marginTop: 5
  },
  filterContainer: {
    width: '100%',
    height: '30%'
  },
  filterTitle: {
    fontSize: SIZES.p18,
    color: COLORS.black,
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    marginTop: '5%'
  },
  filtersBox: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },
  filterButton: {
    width: 120,
    height: 25,
    backgroundColor: COLORS.pictureBoxBackground,
    borderRadius: SIZES.buttonRadius,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  filterText: {
    fontFamily: 'Montserrat',
    fontSize: SIZES.p18
  },
  reviewsContainer: {
    width: '100%',
    alignItems: 'center'
  },
  valorationContainer: {
    width: '95%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  punctuation: {
    fontSize: SIZES.p20
  },
  reviewsFlatList: {
    width: '95%'
  },
  reviewBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '100%',
    marginBottom: 15,
    borderRadius: SIZES.squareRadius,
    ...SHADOW

  },
  userPictureBox: {
    justifyContent: 'center',
    alignContent: 'center'
  },
  userPicture: {
    height: 105,
    width: 105,
    resizeMode: 'cover',
    borderRadius: 100,
    backgroundColor: COLORS.white
  },
  reviewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    padding: 20,
    ...BORDER
  },
  userName: {
    fontSize: SIZES.p20,
    color: COLORS.brown,
    fontFamily: 'MontserratBold'
  },
  reviewText: {
    fontSize: SIZES.p20,
    color: COLORS.brown,
    fontFamily: 'Montserrat',
    marginTop: '5%',
    paddingRight: 5
  }
})

export default function ProductDetail () {
  const renderSkinTypes = ({ item }: any) => (
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterText}>{item}</Text>
    </TouchableOpacity>
  )
  const renderReviews = ({ item }: any) => (
    <View style={styles.reviewBox}>
      <View style={styles.userPictureBox}>
        <Image
        source={images.coverGirl}
        style={styles.userPicture}
        key={1}
        />
      </View>
      <View style={styles.reviewContainer}>
        <Text style={styles.userName}>Angela Pedrero
        </Text>
        <Text style={styles.reviewText}>I loved it. I used it for a while, and my skin is way better than before. I loved it.
        </Text>
      </View>
    </View>
  )
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.detailBackground} style={styles.header} >
         <View style={styles.pictureBox}>
            <Image
            source={{ uri: 'https://www.laroche-posay.es/-/media/project/loreal/brand-sites/lrp/emea/es/products/effaclar/effaclar-cleansing-foaming-gel/la-roche-posay-face-cleanser-effaclar-cleansing-foaming-gel-200ml-3337872411083-front.png' }}
            style={styles.productPicture} key={1}
            />
         </View>
      </ImageBackground>
      <View style={styles.body}>
        <View style={styles.productInformation}>
        <Text style={styles.productNameText}>EFFACLARE
          </Text>
          <Text style={styles.productDetailsText}>LA ROCHE-POSAY
          </Text>
          <Text style={styles.productDetailsText}>19.99€
          </Text>
        </View>
        <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>Choose your skin type to check all the reviews:
          </Text>
        <FlatList
        style={styles.filtersBox}
        data= {skinTypes}
        renderItem={renderSkinTypes}
        keyExtractor = {(item: any) => item}
        horizontal={true}
        />
        </View>
        <View style={styles.reviewsContainer}>
          <View style={styles.valorationContainer}>
            <Text style={styles.punctuation}>4,5</Text>
          </View>
          <FlatList
              data = {categories}
              renderItem={renderReviews}
              keyExtractor = {(item: any) => item.id}
              horizontal={false}
              style={styles.reviewsFlatList}
              />
          </View>
      </View>
    </SafeAreaView>
  )
}
