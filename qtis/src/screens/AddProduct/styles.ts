
import { COLORS, SIZES, BORDER } from '../../../constants'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%'
  },
  backIcon: {
    color: COLORS.black,
    marginBottom: 5,
    marginLeft: 10,
    position: 'absolute',
    top: 10
  },
  pictureBox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: COLORS.pictureBoxBackground,
    marginBottom: 10
  },
  productPicture: {
    resizeMode: 'contain',
    height: 160,
    width: 160,
    borderRadius: 100,
    backgroundColor: COLORS.white
  },
  inputsContainer: {
    width: '85%',
    height: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.squareRadius,
    backgroundColor: COLORS.categoryTextBackground
  },
  input: {
    flexGrow: 1,
    width: '90%',
    height: '18%',
    margin: 5,
    justifyContent: 'center',
    backgroundColor: COLORS.cream,
    fontSize: SIZES.p20,
    color: COLORS.lettersGrey,
    fontFamily: 'Montserrat',
    padding: 10
  },
  categoriesInput: {
    flexGrow: 1,
    width: '90%',
    height: '25%',
    margin: 5,
    justifyContent: 'center',
    backgroundColor: COLORS.cream,
    fontSize: SIZES.p20,
    color: COLORS.lettersGrey,
    fontFamily: 'Montserrat',
    padding: 10
  },

  categoriesTitle: {
    fontSize: SIZES.p18,
    color: COLORS.lettersGrey,
    fontFamily: 'Montserrat'
  },
  categoriesModule: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    width: '100%',
    top: -250
  },
  categoryText: {
    fontSize: SIZES.p18,
    fontFamily: 'Montserrat'
  },
  categoryButton: {
    ...BORDER,
    height: 50
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    alignSelf: 'center',
    width: '40%',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
    margin: 5,
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

export default styles
