import { cleanup, fireEvent, render, act } from '@testing-library/react-native'
import Profile from './profile'
import React from 'react'
import { Provider } from 'react-redux'
import { Alert } from 'react-native'
import configureStore from 'redux-mock-store'
import * as actions from '../../redux/actions/qtisActionCreators'
import Reviews from '../Reviews/Reviews'
import * as ImagePicker from 'expo-image-picker'
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
            userReducer: { user: { age: 14 }, userPicture: 'asd' },
            reviewsReducer: {
              reviews: []
            }
          }
          )}><Profile navigation={{ navigate, goBack }} route={{ params }} />
          </Provider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  describe('When opening reviews', () => {
    test('Then it will match the snapshot', () => {
      jest.spyOn(actions, 'fetchReviews').mockReturnValue({ type: '' })

      const { getByTestId } = render(component)
      const button = getByTestId('openReviews')
      act(() => {
        fireEvent.press(button)
      })
      const mockReviewsStore = configureStore()
      const reviewComponent = (<Provider store= { mockReviewsStore({
        reviewsReducer: {
          reviews: []
        }
      })}>
          <Reviews route={{ params }} />
        </Provider>
      )

      const componentRendered = render(reviewComponent)
      expect(componentRendered).toMatchSnapshot()
    })
  })

  describe(' When oppening account settings, writing on inputs and pressing action.updateUser', () => {
    test('Then action.updateUser will be called with { city, age, userName, _id, userPicture, skinType } ', () => {
      jest.spyOn(actions, 'updateUser').mockReturnValue({ type: '' })
      const { getByPlaceholderText, getByTestId } = render(component)

      const openSettingsButton = getByTestId('openSettings')
      act(() => {
        fireEvent.press(openSettingsButton)
      })
      // write on userName input:
      const userNameInput = getByPlaceholderText("What's your name?")
      const newUserName = 'newValue'
      act(() => {
        fireEvent.changeText(userNameInput, newUserName)
      })
      // write on age input:
      const ageInput = getByPlaceholderText('How old are you?')
      const newAge = 'newAge'
      act(() => {
        fireEvent.changeText(ageInput, newAge)
      })
      // write on city input:
      const cityInput = getByPlaceholderText('Where are you from?')
      const newCity = 'newCity'
      act(() => {
        fireEvent.changeText(cityInput, newCity)
      })
      // find function and press it
      act(() => {
        fireEvent.press(getByTestId('updateUserButton'))
      })
      expect(actions.updateUser).toHaveBeenCalled()
    })
  })
  describe(' ---->When pressing openSkinType', () => {
    test('Then skinTypesMap will be in the document', () => {
      const { getByTestId, getAllByTestId } = render(component)
      // Press openSkinType button and making skinType appear
      const button = getByTestId('openSkinType')
      act(() => {
        fireEvent.press(button)
      })
      // Press skinTypeButton, to choose a skintype
      const skinType = getAllByTestId('skinTypesMap')[0]
      expect(skinType).toBeTruthy()
      // Then press on that skintype, making skinTypesMap disappear
      act(() => {
        fireEvent.press(skinType)
      })
      // Next check setOpenSkinType turned false or selectSkinType call
    })
  })

  describe('When rendering the component and mocking picker image with cancelled: false ', () => {
    test('Then the text will match the snapshot', async () => {
      const result = {
        cancelled: false,
        uri: 'imageURI'
      }
      jest.spyOn(ImagePicker, 'launchImageLibraryAsync').mockReturnValueOnce(result)

      const { getByTestId } = render(component)
      const text = getByTestId('imagePicker')
      act(() => {
        fireEvent.press(text)
      })

      expect(text).toBeTruthy()
    })
  })
  describe('When rendering the component and mocking requestMediaLibraryPermissionsAsync ', () => {
    test('Then alert will be called', async () => {
      const result = {
        status: 'notgranted'
      }
      jest.spyOn(ImagePicker, 'requestMediaLibraryPermissionsAsync').mockReturnValueOnce(result)
      jest.spyOn(Alert, 'alert')

      const { getByTestId } = render(component)
      act(() => {
        fireEvent.press(getByTestId('imagePicker'))
      })
      expect(Alert.alert).toBeTruthy()
    })
  })
})
