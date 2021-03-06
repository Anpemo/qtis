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
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function Reviews ({ reviews, actions, parameter }: any) {
  const navigation = useNavigation()
  const [rating, setRating] = useState('')
  const [reviewsFiltered, setReviewsFiltered] = useState([])
  const [filtered, setFiltered] = useState(false)
  let actualView
  +parameter ? (actualView = 'product') : (actualView = 'user')

  function ratingCalculation () {
    const totalScore = reviews?.reduce((accumulator: number, currentValue: any) => {
      return accumulator + currentValue.rating
    }, 0)
    const amountReviews = reviews?.length
    const ratingNumber = (totalScore / amountReviews).toFixed(1)
    setRating((ratingNumber).toString())
  }

  useEffect(() => {
    actions.fetchReviews(parameter)
    ratingCalculation()
  }, [reviews?.length])

  function filterReviews (filter: string) {
    if (filter === 'None') {
      setFiltered(false)
    } else {
      const reviewsFilter = reviews.filter((review: any) => review.skinType === filter)
      setReviewsFiltered(reviewsFilter)
      setFiltered(true)
    }
  }

  const renderSkinTypes = ({ item }: any) => (
    <TouchableOpacity
    style={styles.filterButton}
    onPress={() => filterReviews(item)}
    testID={'skinTypeButton'}
    >
      <Text style={styles.filterText}>{item}</Text>
    </TouchableOpacity>
  )
  return (
        <SafeAreaView style={styles.container}>
          {actualView === 'product' && (
            reviews?.length > 0
              ? <View style={styles.valorationContainer}>
                <Text style={styles.punctuation}>{rating}</Text>
                <Rating
                type='star'
                ratingCount={5}
                readonly={true}
                fractions={4}
                imageSize={30}
                startingValue={+rating}
                ratingBackgroundColor={'black'}
                />
          </View>
              : <View style={styles.valorationContainer} testID={'valorationContainer'}>
                <Text style={styles.punctuation}>There are no reviews</Text>
            </View>
          )
           }

          { actualView === 'product' &&
          <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>Filter by skin type:</Text>
            <FlatList
                style={styles.filtersBox}
                data= {skinTypes}
                renderItem={renderSkinTypes}
                keyExtractor = {(item: any) => item}
                horizontal={true}
            />
            </View>}
            <View style={styles.reviewsContainer}>

              <View style={styles.reviewTitleContainer}>
                <Text style={styles.reviewsTitle}>REVIEWS</Text>
                { actualView === 'product' &&
                <TouchableOpacity
                onPress={() => navigation.navigate('AddReview', { productBarCode: parameter })}
                testID={'navigateAddReview'}>
                <AntDesign
                name="pluscircleo"
                size={30}
                color="black"
                />
                </TouchableOpacity>
                  }
               </View>
              <View style={styles.reviewsFlatList}>
              { filtered === true
                ? reviewsFiltered.map((item: any) => {
                  return (
                  <View style={styles.reviewBox} key={item._id}>
                    <View style={styles.userPictureBox}>
                      <Image
                      source={{ uri: item.userPicture }}
                      style={styles.userPicture}
                      key={1}
                      />
                    </View>
                    <View style={styles.reviewContainer}>
                     <Text style={styles.userName}>{item.userName}
                      </Text>

                      <Text style={styles.userName}>{item.rating}<EvilIcons name="star" size={20} color="grey" />
                      </Text>
                      <Text style={styles.reviewText}>{item.reviewText}
                      </Text>
                    </View>
                  </View>
                  )
                })
                : reviews?.map((item: any) => {
                  return (
                <View style={styles.reviewBox} key={item._id}>
                  <View style={styles.userPictureBox}>
                    <Image
                    source={{ uri: item.userPicture }}
                    style={styles.userPicture}
                    key={1}
                    />
                  </View>
                  <View style={styles.reviewContainer}>
                  { actualView === 'product'
                    ? <Text style={styles.userName}>{item.userName}
                      </Text>
                    : <Text style={styles.userName} testID={'profileProductName'}>{item.productName}
                      </Text>
                  }
                    <Text style={styles.userName}>{item.rating}<EvilIcons name="star" size={20} color="grey" />
                    </Text>
                    <Text style={styles.reviewText}>{item.reviewText}
                    </Text>
                  </View>
                </View>
                  )
                })
            }
              </View>
              </View>
        </SafeAreaView>
  )
}
function mapStateToProps ({ reviewsReducer, userReducer }: any) {
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
