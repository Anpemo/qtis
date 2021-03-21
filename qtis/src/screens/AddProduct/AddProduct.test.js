import { cleanup, fireEvent, render } from '@testing-library/react-native'
import AddProduct from './AddProduct'
import React from 'react'
import { Provider } from 'react-redux'
import { Alert } from 'react-native'
import configureStore from 'redux-mock-store'
import * as actions from '../../redux/actions/qtisActionCreators'
// import * as ImagePicker from '../ImagePicker'
jest.mock('../../redux/actions/qtisActionCreators')

describe('Given a AddProduct component', () => {
  let component
  const navigate = jest.fn()
  const goBack = jest.fn()
  const params = 123123123

  beforeEach(() => {
    const mockStore = configureStore()

    component = (
          <Provider store={mockStore({ productReducer: { product: {} } })}><AddProduct navigation={{ navigate, goBack }} route={{ params }} /></Provider>
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
      fireEvent.changeText(productNameInput, newValue)
      expect(productNameInput.props.value).toBe(newValue)
    })
    test('Then brandName will change', () => {
      const { getByPlaceholderText } = render(component)

      const brandNameInput = getByPlaceholderText('Brand Name')
      const newValue = 'newValue'
      fireEvent.changeText(brandNameInput, newValue)
      expect(brandNameInput.props.value).toBe(newValue)
    })
    test('Then price will change', () => {
      const { getByPlaceholderText } = render(component)

      const priceInput = getByPlaceholderText('Average price')
      const newValue = 'newValue'
      fireEvent.changeText(priceInput, newValue)
      expect(priceInput.props.value).toBe(newValue)
    })
  })
  describe('When pressing on back button', () => {
    test('Then it will navigate', () => {
      const { getByTestId } = render(component)
      const backButton = getByTestId('backButton')
      fireEvent.press(backButton)
      expect(goBack).toHaveBeenCalled()
    })
  })
  describe('When pressing the SHARE button', () => {
    test('Then createProduct  will be called', () => {
      jest.spyOn(actions, 'createProduct').mockReturnValue({ type: '' })
      const { getByTestId } = render(component)
      const button = getByTestId('shareButton')
      fireEvent.press(button)
      expect(actions.createProduct).toHaveBeenCalled()
    })
  })
  describe('When pressing the GO TO BROWSER button', () => {
    test('Then navigate  will be called', () => {
      const { getByTestId } = render(component)
      const button = getByTestId('navigatorButton')
      fireEvent.press(button)
      expect(navigate).toHaveBeenCalled()
    })
  })
  describe('When pressing on categories box', () => {
    test('Then openCategories will be true', () => {
      const selectCategory = jest.fn()
      const { getByTestId, getAllByTestId } = render(component)
      const button = getByTestId('openCategoryButton')
      fireEvent.press(button)
      const categoryButton = getAllByTestId('categoryButton')[0]
      fireEvent.press(categoryButton)

      expect(selectCategory).toHaveBeenCalled()
    })
  })
  //   describe('When rendering the component and mocking status with empty string ', () => {
  //     test('Then alert will be called', async () => {
  //       render(component)
  //       const mockImagePicker = { launchCameraAsync: { requestMediaLibraryPermisionsAsync: jest.fn() } }
  //       const { status } = ImagePicker.launchCameraAsync({ requestMediaLibraryPermisionsAsync: jest.fn() })

//       jest.spyOn(Alert, 'alert')
//       expect(Alert.alert).toBeTruthy()
//       expect(status).toBe('granted')
//     })
//   })
})
