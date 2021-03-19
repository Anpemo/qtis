import React, { useEffect } from 'react'
import {
  View, Text, FlatList, Image
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Rating } from 'react-native-ratings'
import { connect } from 'react-redux'
import { fetchReviews } from '../../redux/actions/qtisActionCreators'
import { bindActionCreators } from 'redux'
import styles from './ReviewsStyle'

function Reviews ({ reviews, actions, route, parameter }: any) {
  console.log('ruta', parameter)

  useEffect(() => {
    actions.fetchReviews(parameter)
  }, [])

  function renderReviews ({ item }: any) {
    (
        <View style={styles.reviewBox}>
          <View style={styles.userPictureBox}>
            <Image
            source={reviews.userPicture}
            style={styles.userPicture}
            key={1}
            />
          </View>
          <View style={styles.reviewContainer}>
            <Text style={styles.userName}>Angela Pedrero
            </Text>
            <Text style={styles.reviewText}>{item.reviewText}
            </Text>
          </View>
        </View>
    )
  }
  return (
        <SafeAreaView>
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
                  data = {reviews}
                  renderItem={renderReviews}
                  keyExtractor = {(item: any) => item.id}
                  horizontal={false}
                  style={styles.reviewsFlatList}

                  />
              </View>
        </SafeAreaView>
  )
}
function mapStateToProps ({ reviewsReducer }: any) {
  return {
    product: reviewsReducer.product
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
