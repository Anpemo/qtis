
import { COLORS, SIZES, BORDER } from '../../../constants'
import { StyleSheet } from 'react-native'
const productDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  backIcon: {
    color: COLORS.black,
    marginBottom: 5,
    marginLeft: 10,
    position: 'absolute',
    top: 10
  },
  header: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%'
  },
  pictureBox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 175,
    width: 175,
    borderRadius: 100,
    backgroundColor: COLORS.pictureBoxBackground
  },
  productPicture: {
    resizeMode: 'contain',
    height: 125,
    width: 125,
    borderRadius: 100,
    backgroundColor: COLORS.white
  },
  body: {
    flex: 1,
    alignItems: 'center',
    width: '95%'
  },
  productInformation: {
    alignItems: 'center',
    width: '100%'
  },
  productNameText: {
    fontSize: SIZES.p20,
    color: COLORS.black,
    fontFamily: 'MontserratBold'
  },
  productDetailsText: {
    fontSize: SIZES.p20,
    color: COLORS.black,
    fontFamily: 'Montserrat',
    marginTop: 5
  },
  filterContainer: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
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
    width: 120,
    height: 25,
    backgroundColor: COLORS.pictureBoxBackground,
    borderRadius: SIZES.buttonRadius,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  filterText: {
    fontFamily: 'Montserrat',
    fontSize: SIZES.p18
  },
  reviewsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  valorationContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3
  },
  punctuation: {
    fontSize: SIZES.p20,
    fontFamily: 'MontserratBold',
    color: COLORS.black
  },
  reviewsFlatList: {
    width: '95%'
  },
  reviewBox: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: SIZES.squareRadius,
    backgroundColor: COLORS.backgroundGrey

  },
  userPictureBox: {
    height: 105,
    width: 105,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignContent: 'center'
  },
  userPicture: {
    height: 105,
    width: 105,
    resizeMode: 'cover',
    borderRadius: 100,
    backgroundColor: COLORS.white
  },
  reviewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    padding: 20,
    ...BORDER
  },
  userName: {
    fontSize: SIZES.p20,
    color: COLORS.brown,
    fontFamily: 'MontserratBold',
    margin: 3
  },
  reviewText: {
    fontSize: SIZES.p20,
    color: COLORS.brown,
    fontFamily: 'Montserrat',
    backgroundColor: COLORS.white
  }
})

export default productDetailStyles
