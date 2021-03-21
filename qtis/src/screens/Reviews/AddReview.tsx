import React, { useState } from 'react'
import {
  TouchableOpacity, View, Text, ImageBackground, KeyboardAvoidingView
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../../constants'
import styles from './AddReviewStyles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createReview } from '../../redux/actions/qtisActionCreators'
import { AntDesign } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'

function AddReview ({ navigation, route, actions, user }: any) {
  const { productBarCode } = route.params
  const { userName, userPicture, _id } = user
  const { skinType } = user
  const [rating, setRating] = useState('')
  const [reviewText, setReviewText] = useState('')
  function shareReview () {
    actions.createReview({ rating: rating.replace(/,/g, '.'), reviewText, productBarCode, userId: _id, userName, userPicture, skinType })
    navigation.navigate('ProductDetail', productBarCode)
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.backgroundReview} style={styles.backgroundImage}>
        <KeyboardAvoidingView behavior={'height'}>
      <TouchableOpacity onPress={() => { navigation.goBack() }} >
        <AntDesign name="doubleleft" size={22}/>
      </TouchableOpacity>
      <View style={styles.inputsContainer}>
      <TextInput
          onChangeText={(number) => setRating(number.toString())}
          placeholder={'Rate from 1 to 5'}
          style={styles.input}
          value={rating}
          keyboardType={'decimal-pad'}

        />
        <TextInput
          onChangeText={(text) => setReviewText(text)}
          placeholder={'Write your review'}
          style={styles.input}
          value={reviewText}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
        onPress={() => shareReview()}
        style={styles.button}
        >
            <Text style={styles.buttonText}>SHARE</Text>
        </TouchableOpacity>
      </View>
          </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  )
}
function mapStateToProps ({ productsReducer, userReducer }: any) {
  return {
    product: productsReducer.product,
    user: userReducer.user
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
