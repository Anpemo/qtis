import React, { useState, useEffect } from 'react'
import {
  Image, TouchableOpacity, View, Text, ImageBackground, KeyboardAvoidingView, Button, Platform
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../../constants'
import styles from './AddReviewStyles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createReview } from '../../redux/actions/qtisActionCreators'
import { AntDesign } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import categories from '../../../constants/categories'
import * as ImagePicker from 'expo-image-picker'

function AddReview ({ navigation, route, actions }: any) {
  const productBarCode = route.params
  const [rating, setRating] = useState('')
  const [reviewText, setReviewText] = useState('')

  function selectCategory (category : any) {
    setProductCategory(category)
    setOpenCategories(false)
  }
  function shareReview () {
    actions.createReview({ productBarCode: productBarCode, productName, brandName, price, productCategory, productPicture })
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
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {productPicture && <Image source={{ uri: productPicture }} style={styles.productPicture} />}
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
              <Text style={styles.categoriesTitle}>{productCategory.toUpperCase() || 'CHOOSE A CATEGORY'}</Text>
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
        onPress={() => shareReview()}
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
      createReview
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddReview)
