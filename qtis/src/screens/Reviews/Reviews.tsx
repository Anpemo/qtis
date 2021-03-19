import React, { useEffect, useState } from 'react'
import {
  View, Text, FlatList, Image, TouchableOpacity
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Rating } from 'react-native-ratings'
import { connect } from 'react-redux'
import { fetchReviews } from '../../redux/actions/qtisActionCreators'
import { bindActionCreators } from 'redux'
import styles from './ReviewsStyle'
import skinTypes from '../../../constants/skinTypes'
import { AntDesign } from '@expo/vector-icons'

function Reviews ({ navigation, reviews, actions, parameter }: any) {
  const [rating, setRating] = useState('')
  useEffect(() => {
    actions.fetchReviews(parameter)
  }, [])

  function ratingCalculation () {
    const totalScore = reviews?.reduce((accumulator: Number, currentValue: any) => {
      return accumulator + currentValue.rating
    }, 0)
    const amountReviews = reviews?.length
    setRating((totalScore / amountReviews).toString())
  }

  useEffect(() => {
    ratingCalculation()
  }, [reviews.length])

  const renderSkinTypes = ({ item }: any) => (
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterText}>{item}</Text>
    </TouchableOpacity>
  )
  return (
        <SafeAreaView style={styles.container}>
          <View style={styles.valorationContainer}>
                <Text style={styles.punctuation}>{rating}</Text>
                <Rating
                type='star'
                ratingCount={5}
                readonly={true}
                fractions={4}
                imageSize={30}
                startingValue={3.5}
                ratingBackgroundColor={'black'}
                />
          </View>
          <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>Filter by skin type:</Text>
            <FlatList
                style={styles.filtersBox}
                data= {skinTypes}
                renderItem={renderSkinTypes}
                keyExtractor = {(item: any) => item}
                horizontal={true}
            />
            </View>
            <View style={styles.reviewsContainer}>

              <View style={styles.reviewTitleContainer}>
                <Text style={styles.reviewsTitle}>REVIEWS</Text>
                <AntDesign name="pluscircleo" size={30} color="black" onPress={() => navigation.navigate('AddReview')}/>
               </View>
              <View style={styles.reviewsFlatList}>
              {reviews && reviews.map((item: any) => {
                return (
                  <View style={styles.reviewBox} key={item._id}>
                    <View style={styles.userPictureBox}>
                      <Image
                      source={reviews.userPicture}
                      style={styles.userPicture}
                      key={1}
                      />
                    </View>
                    <View style={styles.reviewContainer}>
                      <Text style={styles.userName}>{item.userName}
                      </Text>
                      <Text style={styles.reviewText}>{item.reviewText}
                      </Text>
                    </View>
                  </View>
                )
              })}
              </View>
              </View>
        </SafeAreaView>
  )
}
function mapStateToProps ({ reviewsReducer }: any) {
  return {
    reviews: reviewsReducer.reviews
  }
}

function mapDispatchToProps (dispatch: any) {
  return {
    actions: bindActionCreators({
      fetchReviews
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
