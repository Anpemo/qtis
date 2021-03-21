import { COLORS, SIZES, SHADOW } from '../../../constants'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  backIcon: {
    color: COLORS.black,
    marginBottom: 5,
    marginLeft: 10,
    position: 'absolute',
    top: 10
  },
  title: {
    color: COLORS.black,
    fontSize: SIZES.h3,
    marginTop: 30,
    padding: 5,
    alignSelf: 'center'
  },
  categoriesBox: {
    flex: 1,
    width: '95%',
    alignItems: 'center',
    alignSelf: 'center'
  },
  flatList: {
    width: '100%',
    height: '100%'
  },
  categoryBox: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 150,
    width: '95%',
    marginBottom: 15,
    borderRadius: SIZES.squareRadius,
    backgroundColor: COLORS.brown,
    ...SHADOW

  },
  pictureBox: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 10
  },
  categoryPicture: {
    height: 105,
    width: 105,
    resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: COLORS.white
  },
  textContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '45%',
    borderRadius: SIZES.squareRadius
  },
  brandText: {
    fontSize: SIZES.p20,
    color: COLORS.white,
    alignSelf: 'center',
    fontFamily: 'MontserratBold',
    width: '90%',
    textAlign: 'center'
  },
  productDetailsText: {
    fontSize: SIZES.p20,
    color: COLORS.white,
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    marginTop: '5%'
  }
})
export default styles
