import React, { useEffect } from 'react'
import {
  Image, TouchableOpacity, View, Text, ImageBackground, FlatList
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../../constants'
import skinTypes from '../../../constants/skinTypes'
import { AntDesign } from '@expo/vector-icons'
import styles from './productDetailStyles'
import { connect } from 'react-redux'
import { fetchProduct } from '../../redux/actions/qtisActionCreators'
import { bindActionCreators } from 'redux'
import Reviews from '../../../src/screens/Reviews/Reviews'

function ProductDetail ({ navigation, product, actions, route }: any) {
  const { productBarCode } = route.params
  const renderSkinTypes = ({ item }: any) => (
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterText}>{item}</Text>
    </TouchableOpacity>
  )
  useEffect(() => {
    actions.fetchProduct(productBarCode)
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.detailBackground} style={styles.header} >
      <TouchableOpacity onPress={() => { navigation.goBack() }}>
        <AntDesign name="doubleleft" style={styles.backIcon} size={22}/>
      </TouchableOpacity>
         <View style={styles.pictureBox}>
            <Image
            source={{ uri: product.productPicture }}
            style={styles.productPicture} key={1}
            />
         </View>
      </ImageBackground>

      <View style={styles.body}>
      {product && (<View style={styles.productInformation}>
        <Text style={styles.productNameText}>{product.productName}
          </Text>
          <Text style={styles.productDetailsText}>{product.brandName}
          </Text>
          <Text style={styles.productDetailsText}>{product.price}
          </Text>
        </View>)
    }
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
        <Reviews parameter={productBarCode}/>
      </View>
    </SafeAreaView >
  )
}
function mapStateToProps ({ productsReducer }: any) {
  return {
    product: productsReducer.product
  }
}

function mapDispatchToProps (dispatch: any) {
  return {
    actions: bindActionCreators({
      fetchProduct
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
