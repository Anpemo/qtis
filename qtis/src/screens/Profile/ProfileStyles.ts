import { StyleSheet } from 'react-native'
import { COLORS, SIZES, SHADOW, BORDER } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: '100%'
  },
  scroll: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
    alignContent: 'center'
  },
  header: {
    flex: 0.5,
    resizeMode: 'cover',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%'
  },
  pictureBox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 165,
    width: 165,
    borderRadius: 100,
    backgroundColor: COLORS.white,
    marginBottom: 10
  },
  userPicture: {
    height: 125,
    width: 125,
    resizeMode: 'cover',
    borderRadius: 100,
    backgroundColor: COLORS.white
  },
  userPictureText: {
    fontFamily: 'MontserratBold'
  },
  cameraButtonContainer: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: -5,
    right: -10,
    padding: 7,
    borderRadius: 50
  },
  body: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginBottom: 40
  },
  userInformation: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '95%',
    marginTop: 10,
    borderRadius: SIZES.squareRadius,
    ...SHADOW
  },
  userName: {
    fontSize: SIZES.p20,
    color: COLORS.black,
    alignSelf: 'center',
    fontFamily: 'MontserratBold'
  },
  userData: {
    fontSize: SIZES.p20,
    color: COLORS.black,
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    marginTop: 5
  },
  updateButton: {
    margin: 5,
    width: SIZES.buttonwidth * 0.8,
    height: SIZES.buttonheight * 0.9,
    borderRadius: SIZES.buttonRadius,
    backgroundColor: COLORS.backgroundGrey,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOW
  },
  updateText: {
    fontFamily: 'MontserratBold',
    color: COLORS.white,
    fontSize: SIZES.buttonText * 0.9
  },
  accordionsBox: {
    width: '100%',
    alignSelf: 'center'
  },
  sectionContainer: {
    width: '100%',
    justifyContent: 'center',
    marginVertical: 5,
    backgroundColor: COLORS.white
  },
  section: {
    // flexGrow: 1
  },
  sectionName: {
    fontFamily: 'MontserratBold',
    fontSize: SIZES.p18,
    lineHeight: 40,
    paddingLeft: 10,
    backgroundColor: COLORS.cream,
    marginBottom: 3
  },

  sectionContentBox: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10
  },
  skinTypesButton: {
    ...BORDER,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center'
  },
  skinType: {
    fontSize: SIZES.p18,
    fontFamily: 'Montserrat'
  },
  settingInputs: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    paddingLeft: 10,
    height: 40,
    marginBottom: 3,
    borderRadius: SIZES.buttonRadius,
    ...BORDER,
    fontFamily: 'MontserratBold'
  }
})

export default styles
