import React, { useEffect } from 'react'
import {
  Image, StyleSheet, TouchableOpacity, View, Text, FlatList
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, SHADOW } from '../../../constants'
import { AntDesign } from '@expo/vector-icons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchProducts } from '../../redux/actions/qtisActionCreators'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  backIcon: {
    color: COLORS.black,
    marginBottom: 5,
    marginLeft: 10,
    position: 'absolute',
    top: 10
  },
  title: {
    color: COLORS.black,
    fontSize: SIZES.h3,
    marginTop: 30,
    padding: 5,
    alignSelf: 'center'
  },
  categoriesBox: {
    flex: 1,
    width: '95%',
    alignItems: 'center',
    alignSelf: 'center'
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

function CategoryBrowser ({ route, navigation, actions, products }: any) {
  useEffect(() => {
    actions.fetchProducts(route.params.categoryName)
  }, [])

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.categoryBox} onPress={() => navigation.navigate('ProductDetail', { productName: item.name })}>
    <View style={styles.pictureBox}>
      <Image
      source={{ uri: 'https://www.laroche-posay.es/-/media/project/loreal/brand-sites/lrp/emea/es/products/effaclar/effaclar-cleansing-foaming-gel/la-roche-posay-face-cleanser-effaclar-cleansing-foaming-gel-200ml-3337872411083-front.png' }}
      style={styles.categoryPicture} key={1}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.brandText}>{item.productName}
    </Text>
    <Text style={styles.productDetailsText}>{item.brandName}
    </Text>
    <Text style={styles.productDetailsText}>{`${item.price}€`}
    </Text>
    </View>
</TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.goBack() }}>
        <AntDesign name="doubleleft" style={styles.backIcon} size={22}/>
      </TouchableOpacity>
      <Text style={styles.title}>{route.params.categoryName.toUpperCase()}</Text>
      <View style={styles.categoriesBox}>
      <FlatList
      data = {products}
      renderItem={renderItem}
      keyExtractor = {(item: any) => item.productName}
      horizontal={false}
      style={styles.flatList}
      />
      </View>
    </SafeAreaView>
  )
}

function mapStateToProps ({ productsReducer }: any) {
  return {
    products: productsReducer.products
  }
}

function mapDispatchToProps (dispatch: any) {
  return {
    actions: bindActionCreators({
      fetchProducts
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryBrowser)
