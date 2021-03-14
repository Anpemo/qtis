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
    backgroundColor: COLORS.white
  },
  header: {
    flex: 0.3,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  pictureBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 175,
    width: 175,
    borderRadius: 100,
    backgroundColor: COLORS.pictureBoxBackground
  },
  productPicture: {
    resizeMode: 'contain',
    height: 125,
    width: 125,
    borderRadius: 100,
    backgroundColor: COLORS.white
  },
  body: {
    flex: 0.7,
    alignItems: 'center',
    width: '95%'
  },
  productInformation: {
    alignItems: 'center',
    width: '100%'
  },
  productNameText: {
    fontSize: SIZES.p20,
    color: COLORS.black,
    fontFamily: 'MontserratBold'
  },
  productDetailsText: {
    fontSize: SIZES.p20,
    color: COLORS.black,
    fontFamily: 'Montserrat',
    marginTop: 5
  },
  filterContainer: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  filterTitle: {
    fontSize: SIZES.p18,
    color: COLORS.black,
    fontFamily: 'Montserrat'
  },
  filtersBox: {
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
    margin: 3
  },
  filterText: {
    fontFamily: 'Montserrat',
    fontSize: SIZES.p18
  },
  reviewsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  valorationContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3
  },
  punctuation: {
    fontSize: SIZES.p20,
    fontFamily: 'MontserratBold',
    color: COLORS.black
  },
  reviewsFlatList: {
    width: '95%'
  },
  reviewBox: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: SIZES.squareRadius,
    backgroundColor: COLORS.backgroundGrey

  },
  userPictureBox: {
    height: 105,
    width: 105,
    alignSelf: 'flex-end',
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
    fontFamily: 'MontserratBold',
    margin: 3
  },
  reviewText: {
    fontSize: SIZES.p20,
    color: COLORS.brown,
    fontFamily: 'Montserrat',
    backgroundColor: COLORS.white
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
        showHorizontalScrollIndicator={false}
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
