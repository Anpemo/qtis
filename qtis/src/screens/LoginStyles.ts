import { SIZES, COLORS } from '../../constants'
import { StyleSheet } from 'react-native'

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center'
  },
  backContainer: {
    top: -160
  },
  backIcon: {
    color: COLORS.black,
    marginBottom: 5
  },
  title: {
    fontSize: SIZES.h2,
    color: COLORS.black,
    fontFamily: 'Montserrat',
    marginBottom: 10
  },
  formBox: {
    height: 118,
    backgroundColor: COLORS.cream,
    borderRadius: SIZES.squareRadius
  },
  inputTop: {
    height: '50%',
    width: '90%',
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    fontSize: SIZES.p20,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1
  },
  inputBottom: {
    height: '50%',
    width: '90%',
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    fontSize: SIZES.p20
  },
  button: {
    justifyContent: 'center',
    backgroundColor: COLORS.black,
    height: SIZES.buttonheight,
    width: '100%',
    borderRadius: SIZES.buttonRadius,
    marginTop: 30
  },
  buttonText: {
    color: COLORS.white,
    alignSelf: 'center',
    fontSize: SIZES.p20,
    fontFamily: 'Montserrat'
  }
})

export default LoginStyles
