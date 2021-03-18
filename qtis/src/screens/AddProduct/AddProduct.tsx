import React, { useState } from 'react'
import {
  Image, TouchableOpacity, View, Text, ImageBackground, KeyboardAvoidingView
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../../constants'
import styles from './AddProductStyles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createProduct } from '../../redux/actions/qtisActionCreators'
import { AntDesign } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import categories from '../../../constants/categories'

function ProductDetail ({ navigation, route, actions }: any) {
  const [productName, setProductName] = useState('')
  const [brandName, setBrandName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [openCategories, setOpenCategories] = useState(false)
  const { productBarCode } = route.params

  function selectCategory (category : any) {
    setCategory(category)
    setOpenCategories(false)
  }
  function shareProduct () {
    actions.createProduct({ productBarCode, productName, brandName, price, category })
    navigation.navigate('ProductDetail', { productBarCode })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.backgroundReview} style={styles.backgroundImage}>
        <KeyboardAvoidingView behavior={'height'}>
      <TouchableOpacity onPress={() => { navigation.goBack() }} >
        <AntDesign name="doubleleft" size={22}/>
      </TouchableOpacity>
      <View style={styles.pictureBox}>
            <Image
            source={{ uri: 'https://www.laroche-posay.es/-/media/project/loreal/brand-sites/lrp/emea/es/products/effaclar/effaclar-cleansing-foaming-gel/la-roche-posay-face-cleanser-effaclar-cleansing-foaming-gel-200ml-3337872411083-front.png' }}
            style={styles.productPicture} key={1}
            />
      </View>
      <View style={styles.inputsContainer}>
      <TextInput
          onChangeText={(text) => setProductName(text)}
          placeholder={'Product Name'}
          style={styles.input}
          value={productName}
        />
        <TextInput
          onChangeText={(text) => setBrandName(text)}
          placeholder={'Brand Name'}
          style={styles.input}
          value={brandName}
        />
        <TextInput
          onChangeText={(text) => setPrice(text)}
          placeholder={'Average price'}
          style={styles.input}
          value={price}
        />

      <TouchableOpacity
        onPress={() => {
          setOpenCategories(!openCategories)
        }}
        style={styles.categoriesInput}
        activeOpacity={0.5}
        >
            <View>
              <Text style={styles.categoriesTitle}>{category.toUpperCase() || 'CHOOSE A CATEGORY'}</Text>
              <View style={styles.categoriesModule}>
                {openCategories && categories.map((category) => (
                  <TouchableOpacity
                  key={category.id}
                  activeOpacity={0.5}
                  style={styles.categoryButton}
                  onPress={() => selectCategory(category.name)}
                  >
                    <Text style={styles.categoryText}>{category.name.toUpperCase()}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

        </TouchableOpacity>

      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
        onPress={() => shareProduct()}
        style={styles.button}
        >
            <Text style={styles.buttonText}>SHARE</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => { navigation.navigate('tabNavigator', { Screen: 'Browser' }) }}
        style={styles.button}
        >
            <Text style={styles.buttonText}>GO TO BROWSER</Text>
        </TouchableOpacity>
      </View>
          </KeyboardAvoidingView>
      </ImageBackground>
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
      createProduct
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
