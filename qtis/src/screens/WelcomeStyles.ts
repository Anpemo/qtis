import { SIZES, COLORS } from '../../constants'
import { StyleSheet } from 'react-native'

const WelcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backgroundPicture: {
    flex: 1,
    position: 'absolute',
    height: SIZES.height,
    resizeMode: 'contain'
  },
  titleText: {
    fontSize: SIZES.h2 * 1.2,
    fontFamily: 'Montserrat',
    marginTop: 20
  },
  buttonContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 40
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.buttonRadius,
    height: SIZES.buttonheight,
    width: SIZES.buttonwidth,
    marginTop: 10,
    backgroundColor: COLORS.black
  },
  buttonText: {
    fontSize: SIZES.buttonText,
    lineHeight: 22,
    fontFamily: 'Montserrat',
    fontWeight: '400',
    letterSpacing: 3,
    color: COLORS.white
  },
  bodyText: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.buttonheight,
    width: SIZES.buttonwidth,
    marginTop: 10,
    marginLeft: 25,
    fontSize: SIZES.buttonText,
    lineHeight: 22,
    fontFamily: 'MontserratBold',
    fontWeight: '400',
    letterSpacing: 3
  }
})

export default WelcomeStyles
