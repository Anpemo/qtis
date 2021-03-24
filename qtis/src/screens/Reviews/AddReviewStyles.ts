
import { COLORS, SIZES } from '../../../constants'
import { StyleSheet } from 'react-native'
const AddReviewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%'
  },
  secondContainer: {
    flex: 1,
    alignItems: 'center',
    width: SIZES.width,
    justifyContent: 'center'
  },
  backIcon: {
    color: COLORS.black,
    marginBottom: 5,
    marginLeft: 10,
    position: 'absolute',
    top: 40,
    left: 40
  },
  inputsContainer: {
    width: SIZES.width * 0.8,
    height: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.squareRadius,
    backgroundColor: COLORS.categoryTextBackground
  },
  rateInput: {
    width: '90%',
    height: '20%',
    margin: 5,
    justifyContent: 'center',
    backgroundColor: COLORS.cream,
    fontSize: SIZES.p20,
    color: COLORS.lettersGrey,
    fontFamily: 'Montserrat',
    padding: 10
  },
  textInput: {
    width: '90%',
    height: '70%',
    margin: 5,
    justifyContent: 'center',
    backgroundColor: COLORS.cream,
    fontSize: SIZES.p20,
    color: COLORS.lettersGrey,
    fontFamily: 'Montserrat',
    padding: 10
  },
  button: {
    alignSelf: 'center',
    width: SIZES.width * 0.8,
    justifyContent: 'center',
    backgroundColor: COLORS.black,
    marginTop: 15,
    height: SIZES.buttonheight,
    borderRadius: SIZES.buttonRadius
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: SIZES.buttonText * 0.8,
    fontFamily: 'Montserrat'
  }

})

export default AddReviewStyles
