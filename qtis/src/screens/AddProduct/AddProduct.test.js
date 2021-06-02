import { cleanup, fireEvent, render, act } from '@testing-library/react-native'
import AddProduct from './AddProduct'
import React from 'react'
import { Provider } from 'react-redux'
import { Alert } from 'react-native'
import configureStore from 'redux-mock-store'
import * as actions from '../../redux/actions/qtisActionCreators'
import * as ImagePicker from 'expo-image-picker'

jest.mock('../../redux/actions/qtisActionCreators')
jest.mock('expo-image-picker')

describe('Given a AddProduct component', () => {
  let component
  const navigate = jest.fn()
  const goBack = jest.fn()
  const params = 123123123

  beforeEach(() => {
    const mockStore = configureStore()

    component = (
          <Provider store={mockStore({
            productReducer: {
              product: {}
            }
          })}><AddProduct navigation={{ navigate, goBack }} route={{ params }} />
          </Provider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  describe('When writing on inputs', () => {
    test('Then productName will change', () => {
      const { getByPlaceholderText } = render(component)
      const productNameInput = getByPlaceholderText('Product Name')
      const newValue = 'newValue'
      act(() => {
        fireEvent.changeText(productNameInput, newValue)
      })
      expect(productNameInput.props.value).toBe(newValue)
    })
    test('Then brandName will change', () => {
      const { getByPlaceholderText } = render(component)

      const brandNameInput = getByPlaceholderText('Brand Name')
      const newValue = 'newValue'
      act(() => {
        fireEvent.changeText(brandNameInput, newValue)
      })
      expect(brandNameInput.props.value).toBe(newValue)
    })
    test('Then price will change', () => {
      const { getByPlaceholderText } = render(component)

      const priceInput = getByPlaceholderText('Average price')
      const newValue = 'newValue'
      act(() => {
        fireEvent.changeText(priceInput, newValue)
      })
      expect(priceInput.props.value).toBe(newValue)
    })
  })
  describe('When pressing on back button', () => {
    test('Then it will navigate', () => {
      const { getByTestId } = render(component)
      const backButton = getByTestId('backButton')
      act(() => {
        fireEvent.press(backButton)
      })
      expect(goBack).toHaveBeenCalled()
    })
  })
  describe('When pressing the SHARE button', () => {
    test('Then createProduct  will be called', () => {
      jest.spyOn(actions, 'createProduct').mockReturnValue({ type: '' })
      const { getByTestId } = render(component)
      const button = getByTestId('shareButton')
      act(() => {
        fireEvent.press(button)
      })
      expect(actions.createProduct).toHaveBeenCalled()
    })
  })
  describe('When pressing the GO TO BROWSER button', () => {
    test('Then navigate  will be called', () => {
      const { getByTestId } = render(component)
      const button = getByTestId('navigatorButton')
      act(() => {
        fireEvent.press(button)
      })
      expect(navigate).toHaveBeenCalled()
    })
  })
  describe('When pressing on categories box', () => {
    test('Then openCategories will be true', () => {
      const selectCategory = jest.fn()
      const { getByTestId, getAllByTestId } = render(component)
      const button = getByTestId('openCategoryButton')
      act(() => {
        fireEvent.press(button)
      })
      const categoryButton = getAllByTestId('categoryButton')[0]
      act(() => {
        fireEvent.press(categoryButton)
      })

      expect(selectCategory).toMatchSnapshot()
    })
  })
  describe('When rendering the component and mocking picker image with cancelled: false ', () => {
    test('Then the button will match the snapshot', async () => {
      const result = {
        cancelled: false,
        uri: 'imageURI'
      }
      jest.spyOn(ImagePicker, 'launchImageLibraryAsync').mockReturnValueOnce(result)

      const { getByTestId } = render(component)
      const button = getByTestId('pickImage')
      act(() => {
        fireEvent.press(button)
      })

      expect(button).toBeTruthy()
    })
  })
  describe('When rendering the component and mocking requestMediaLibraryPermissionsAsync ', () => {
    test('Then alert will be called', async () => {
      const result = {
        status: 'notgranted'
      }
      jest.spyOn(ImagePicker, 'requestMediaLibraryPermissionsAsync').mockReturnValueOnce(result)
      jest.spyOn(Alert, 'alert')

      const { getByText } = render(component)
      act(() => {
        fireEvent.press(getByText('Pick an image from camera roll'))
      })
      expect(Alert.alert).toBeTruthy()
    })
  })
})
