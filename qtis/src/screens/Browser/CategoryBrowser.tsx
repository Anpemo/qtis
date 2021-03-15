import React from 'react'
import {
  Image, StyleSheet, TouchableOpacity, View, Text, FlatList
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, SHADOW } from '../../../constants'
import categories from '../../../constants/categories'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    color: COLORS.black,
    fontSize: SIZES.h3,
    margin: 10,
    padding: 5,
    alignSelf: 'center'
  },
  categoriesBox: {
    flex: 1,
    width: '95%',
    alignItems: 'center'
  },
  flatList: {
    width: '100%',
    height: '100%'
  },
  categoryBox: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 150,
    width: '95%',
    marginBottom: 15,
    borderRadius: SIZES.squareRadius,
    backgroundColor: COLORS.brown,
    ...SHADOW

  },
  pictureBox: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 10
  },
  categoryPicture: {
    height: 105,
    width: 105,
    resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: COLORS.white
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '50%',
    borderRadius: SIZES.squareRadius
  },
  brandText: {
    fontSize: SIZES.p20,
    color: COLORS.white,
    alignSelf: 'center',
    fontFamily: 'MontserratBold'
  },
  productDetailsText: {
    fontSize: SIZES.p20,
    color: COLORS.white,
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    marginTop: '5%'
  }
})

export default function CategoryBrowser ({ route, navigation }: any) {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.categoryBox} onPress={() => navigation.navigate('ProductDetail', { productName: item.name })}>
    <View style={styles.pictureBox}>
      <Image
      source={{ uri: 'https://www.laroche-posay.es/-/media/project/loreal/brand-sites/lrp/emea/es/products/effaclar/effaclar-cleansing-foaming-gel/la-roche-posay-face-cleanser-effaclar-cleansing-foaming-gel-200ml-3337872411083-front.png' }}
      style={styles.categoryPicture} key={1}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.brandText}>LA ROCHE-POSAY
    </Text>
    <Text style={styles.productDetailsText}>EFFACLARE
    </Text>
    <Text style={styles.productDetailsText}>19.99€
    </Text>
    </View>
</TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{route.params.categoryName.toUpperCase()}</Text>
      <View style={styles.categoriesBox}>
      <FlatList
      data = {categories}
      renderItem={renderItem}
      keyExtractor = {(item: any) => item.id}
      horizontal={false}
      style={styles.flatList}
      />
      </View>
    </SafeAreaView>
  )
}
