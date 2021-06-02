import React, { useEffect } from 'react'
import {
  Image, TouchableOpacity, View, Text, ImageBackground
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../../constants'
import { AntDesign } from '@expo/vector-icons'
import styles from './productDetailStyles'
import { connect } from 'react-redux'
import { fetchProduct } from '../../redux/actions/qtisActionCreators'
import { bindActionCreators } from 'redux'
import Reviews from '../../../src/screens/Reviews/Reviews'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import currency from '../../../constants/currency'

function ProductDetail ({ product, actions, route }: any) {
  const { productBarCode } = route.params
  const navigation = useNavigation()
  useEffect(() => {
    actions.fetchProduct(productBarCode)
  }, [])
  return (
    <ScrollView bounces={false}>
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.detailBackground} style={styles.header} >
      <TouchableOpacity
      onPress={() => { navigation.goBack() }}
      testID={'backButton'}>
        <AntDesign name="doubleleft" style={styles.backIcon} size={22}/>
      </TouchableOpacity>
         <View style={styles.pictureBox}>
            <Image
            source={{ uri: product?.productPicture }}
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
          <Text style={styles.productDetailsText}>{`${product.price} ${currency.EURO}`}
          </Text>
        </View>)
    }
        <Reviews parameter={productBarCode}/>
      </View>
    </SafeAreaView >
    </ScrollView>
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
