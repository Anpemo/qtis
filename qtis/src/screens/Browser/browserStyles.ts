import { COLORS, SIZES, SHADOW } from '../../../constants'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  title: {
    color: COLORS.black,
    fontSize: SIZES.h3,
    margin: 10,
    padding: 5
  },
  categoriesBox: {
    flex: 1
  },
  categoryBox: {
    height: SIZES.height * 0.35,
    width: SIZES.width * 0.43,
    borderRadius: SIZES.squareRadius,
    margin: 10,
    ...SHADOW

  },
  categoryPicture: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: SIZES.squareRadius

  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    height: '50%',
    width: '100%',
    backgroundColor: COLORS.categoryTextBackground,
    borderRadius: SIZES.squareRadius
  },
  categoryText: {
    fontSize: SIZES.p25,
    color: COLORS.brown,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
    fontFamily: 'MontserratBold'
  },
  background: {
    backgroundColor: COLORS.brown
  }
})
export default styles
