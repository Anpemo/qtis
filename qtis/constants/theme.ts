import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const COLORS = {
  // base colors
  cream: 'rgba(221, 161, 94, 0.3)',
  brown: '#D4A373',
  backgroundGrey: '#C0BAB3',
  lettersGrey: '#000000',

  // colors
  black: '#141414',
  white: '#FFFFFF',

  // specific items
  coverbutton: 'rgba(255, 255, 255, 0.7)',
  categoryTextBackground: 'rgba(255, 255, 255, 0.75)',
  pictureBoxBackground: 'rgba(0, 0, 0, 0.25);'
}
export const SIZES = {
  // global sizes
  buttonheight: 48,
  buttonwidth: 260,
  buttonRadius: 50,
  squareRadius: 8,
  squareImageRadius: 5,

  // font sizes
  buttonText: 18,
  h2: 40,
  h3: 25,
  p30: 30,
  p25: 25,
  p20: 20,
  p18: 18,
  p16: 16,
  p14: 14,
  p13: 13,

  // app dimensions
  width,
  height
}

export const SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4
}

export const BORDER = {
  borderColor: 'rgba(192,186,179,1)',
  borderStyle: 'solid',
  borderWidth: 2
}
