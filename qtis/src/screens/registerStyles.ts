import { SIZES, COLORS } from '../../constants'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
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
    height: '65%',
    backgroundColor: COLORS.cream,
    borderRadius: SIZES.squareRadius,
    justifyContent: 'center'
  },
  inputTop: {
    height: '18%',
    width: '90%',
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    fontSize: SIZES.p20,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1
  },
  errorMessage: {
    color: COLORS.error,
    width: '90%',
    marginLeft: 15,
    marginTop: 3

  },
  button: {
    justifyContent: 'center',
    backgroundColor: COLORS.black,
    height: SIZES.buttonheight,
    width: '100%',
    borderRadius: SIZES.buttonRadius,
    marginTop: 20
  },
  buttonText: {
    color: COLORS.white,
    alignSelf: 'center',
    fontSize: SIZES.p20,
    fontFamily: 'Montserrat'
  }
})

export default styles
