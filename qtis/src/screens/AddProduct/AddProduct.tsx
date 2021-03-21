import React, { useState, useEffect } from 'react'
import {
  Image, TouchableOpacity, View, Text, ImageBackground, Alert, KeyboardAvoidingView, Button, Platform
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
import * as ImagePicker from 'expo-image-picker'

function AddProduct ({ navigation, route, actions }: any) {
  const [productName, setProductName] = useState('')
  const [brandName, setBrandName] = useState('')
  const [price, setPrice] = useState('')
  const [productPicture, setProductPicture] = useState(null)
  const [productCategory, setProductCategory] = useState('')
  const [openCategories, setOpenCategories] = useState(false)
  const productBarCode = route.params?.toString()

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.cancelled) {
      setProductPicture(result.uri)
    }
  }
  function selectCategory (category : any) {
    setProductCategory(category)
    setOpenCategories(false)
  }
  function shareProduct () {
    actions.createProduct({ productBarCode: productBarCode, productName, brandName, price: price.replace(/,/g, '.'), productCategory, productPicture })
    navigation.navigate('ProductDetail', { productBarCode })
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.backgroundReview} style={styles.backgroundImage}>
        <KeyboardAvoidingView behavior={'height'}>
      <TouchableOpacity
      onPress={() => { navigation.goBack() }}
      testID={'backButton'}>
        <AntDesign name="doubleleft" size={22}/>
      </TouchableOpacity>
      <View style={styles.pictureBox}>
        {productPicture
          ? <Image source={{ uri: productPicture }} style={styles.productPicture} />
          : <Button title="Pick an image from camera roll" onPress={pickImage} />
      }
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
        testID={'openCategoryButton'}
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
                  testID={'categoryButton'}
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
        testID={'shareButton'}
        >
            <Text style={styles.buttonText}>SHARE</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => { navigation.navigate('tabNavigator', { Screen: 'Browser' }) }}
        style={styles.button}
        testID={'navigatorButton'}
        >
            <Text style={styles.buttonText}>GO TO BROWSER</Text>
        </TouchableOpacity>
      </View>
          </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  )
}

function mapDispatchToProps (dispatch: any) {
  return {
    actions: bindActionCreators({
      createProduct
    }, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(AddProduct)
