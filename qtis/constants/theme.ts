import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const COLORS = {
  // base colors
  cream: '#DDA15E',
  brown: '#D4A373',
  backgroundGrey: '#C0BAB3',
  lettersGrey: '#000000',

  // colors
  black: '#141414',
  white: '#FFFFFF'
}

export const SIZES = {
  // global sizes
  buttonheight: 38,
  buttonRadius: 50,
  squareRadius: 8,
  squareImageRadius: 5,

  // font sizes
  buttonText: 18,
  h2: 30,
  h3: 18,
  p20: 20,
  p16: 16,
  p14: 14,
  p13: 13,

  // app dimensions
  width,
  height
}

export const FONTS = {
  buttons: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.buttonText, lineHeight: 22, letterSpacing: 3 },
  h2: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.h2, lineHeight: 37, letterSpacing: 3 },
  h3: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.h3, lineHeight: 22, letterSpacing: 3 }
}
