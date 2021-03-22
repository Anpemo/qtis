import { cleanup, fireEvent, render } from '@testing-library/react-native'
import Profile from './profile'
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import * as actions from '../../redux/actions/qtisActionCreators'
import Reviews from '../Reviews/Reviews'
// import * as ImagePicker from '../ImagePicker'
jest.mock('../../redux/actions/qtisActionCreators')
const mockedGoBack = jest.fn()
const mockedNavigate = jest.fn()

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      goBack: mockedGoBack,
      navigate: mockedNavigate
    })
  }
})
describe('Given a Profile component', () => {
  let component
  const navigate = jest.fn()
  const goBack = jest.fn()
  const params = 123123123

  beforeEach(() => {
    const mockStore = configureStore()

    component = (
          <Provider store={mockStore({
            userReducer: { user: {} },
            reviewsReducer: {
              reviews: []
            }
          }
          )}><Profile navigation={{ navigate, goBack }} route={{ params }} /></Provider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  describe('When opening reviews', () => {
    test('Then it will render Reviews', () => {
      jest.spyOn(actions, 'fetchReviews').mockReturnValue({ type: '' })

      const { getByTestId } = render(component)
      const button = getByTestId('openReviews')
      fireEvent.press(button)

      const mockReviewsStore = configureStore()
      const reviewComponent = (<Provider store= { mockReviewsStore({
        reviewsReducer: {
          reviews: []
        }
      })}>
          <Reviews route={{ params }} />
        </Provider>
      )

      const { getByText } = render(reviewComponent)
      const text = getByText('There are no reviews')
      expect(text).toBeTruthy()
    })
  })

  describe('When oppening account settings and writing on inputs', () => {
    test('Then userName will change', () => {
      const { getByPlaceholderText, getByTestId } = render(component)
      const button = getByTestId('openSettings')
      fireEvent.press(button)
      const userNameInput = getByPlaceholderText('What\'s your name?')
      const newValue = 'newValue'
      fireEvent.changeText(userNameInput, newValue)
      console.log(userNameInput.props)
      expect(userNameInput.props.value).toBe(newValue)
    })
    test('Then age will change', () => {
      const { getByPlaceholderText, getByTestId } = render(component)
      const button = getByTestId('openSettings')
      fireEvent.press(button)
      const ageInput = getByPlaceholderText('How old are you?')
      const newValue = 'newValue'
      fireEvent.changeText(ageInput, newValue)
      expect(ageInput.props.value).toBe(newValue)
    })
    test('Then city will change', () => {
      const { getByPlaceholderText, getByTestId } = render(component)
      const button = getByTestId('openSettings')
      fireEvent.press(button)
      const cityInput = getByPlaceholderText('Where are you from?')
      const newValue = 'newValue'
      fireEvent.changeText(cityInput, newValue)
      expect(cityInput.props.value).toBe(newValue)
    })
  })
  describe('When pressing on actions.updateuser', () => {
    test('Then it will be called with city', () => {
      const city = 'Barcelona'
      const age = 26
      const userName = 'Angela'
      const _id = 'asd423af'
      const userPicture = 'asdasdas'
      const skinType = 'combination'
      jest.spyOn(actions, 'updateUser').mockReturnValue({ type: '' })

      const { getByTestId } = render(component)
      const button = getByTestId('openSettings')
      fireEvent.press(button)
      fireEvent.press(getByTestId('updateUserButton'))
      expect(actions.userRegister).toHaveBeenCalledWith({ city, age, userName, _id, userPicture, skinType })
    })
  })
  describe('When oppening skin type and pressing on a skintype', () => {
    test('Then setOpenSkinType will be called with false', () => {
      const { getByTestId, getAllByTestId } = render(component)
      const button = getByTestId('openSkinType')
      fireEvent.press(button)
      const skinType = getAllByTestId('skinTypesMap')[0]
      fireEvent.press(skinType)
      expect(skinType).toHaveBeenCalled()
    })
  })
})
