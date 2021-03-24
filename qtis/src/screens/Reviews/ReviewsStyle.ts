
import { COLORS, SIZES, REVIEWBORDER } from '../../../constants'
import { StyleSheet } from 'react-native'
const ReviewsStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  filterContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: 10,
    paddingLeft: 10
  },
  filterTitle: {
    fontSize: SIZES.p18,
    color: COLORS.black,
    fontFamily: 'Montserrat'
  },
  filtersBox: {
    flexDirection: 'row',
    width: '100%'
  },
  filterButton: {
    width: 130,
    height: 30,
    backgroundColor: COLORS.cream,
    borderRadius: SIZES.buttonRadius,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  filterText: {
    fontFamily: 'Montserrat',
    fontSize: SIZES.p16
  },
  reviewsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  valorationContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3
  },
  punctuation: {
    fontSize: SIZES.p20,
    fontFamily: 'Montserrat',
    color: COLORS.black,
    marginRight: 3,
    lineHeight: 20
  },
  reviewTitleContainer: {
    width: '95%',
    paddingTop: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  reviewsTitle: {
    fontSize: SIZES.p20,
    fontFamily: 'MontserratBold'
  },
  reviewsFlatList: {
    width: '100%',
    marginBottom: 50,
    marginTop: 10,
    alignItems: 'center'
  },
  reviewBox: {
    width: '95%',
    flexDirection: 'row',
    marginBottom: 10
  },
  userPictureBox: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 10
  },
  userPicture: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
    borderRadius: 100,
    backgroundColor: COLORS.cream
  },
  reviewContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    borderRadius: SIZES.squareRadius,
    ...REVIEWBORDER
  },
  userName: {
    fontSize: SIZES.p18,
    color: COLORS.brown,
    fontFamily: 'MontserratBold'
  },
  reviewText: {
    fontSize: SIZES.p18,
    color: COLORS.brown,
    fontFamily: 'Montserrat',
    backgroundColor: COLORS.white
  }
})

export default ReviewsStyle
