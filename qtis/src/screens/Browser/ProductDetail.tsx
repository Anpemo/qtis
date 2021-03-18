import React, { useEffect } from 'react'
import {
  Image, TouchableOpacity, View, Text, ImageBackground, FlatList
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../../constants'
import skinTypes from '../../../constants/skinTypes'
import categories from '../../../constants/categories'
import { AntDesign } from '@expo/vector-icons'
import { Rating } from 'react-native-ratings'
import styles from './productDetailStyles'
import { connect } from 'react-redux'
import { fetchProduct } from '../../redux/actions/qtisActionCreators'
import { bindActionCreators } from 'redux'

function ProductDetail ({ navigation, product, actions, route }: any) {
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
  useEffect(() => {
    actions.fetchProduct(route.productBarCode)
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.detailBackground} style={styles.header} >
      <TouchableOpacity onPress={() => { navigation.goBack() }}>
        <AntDesign name="doubleleft" style={styles.backIcon} size={22}/>
      </TouchableOpacity>
         <View style={styles.pictureBox}>
            <Image
            source={{ uri: 'https://www.laroche-posay.es/-/media/project/loreal/brand-sites/lrp/emea/es/products/effaclar/effaclar-cleansing-foaming-gel/la-roche-posay-face-cleanser-effaclar-cleansing-foaming-gel-200ml-3337872411083-front.png' }}
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
        <View style={styles.reviewsContainer}>
          <View style={styles.valorationContainer}>
            <Text style={styles.punctuation}>4,5</Text>
            <Rating
            type='star'
            ratingCount={5}
            readonly={true}
            fractions={4}
            imageSize={30}
            startingValue={4.5}
            ratingBackgroundColor={'black'}
            />
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
