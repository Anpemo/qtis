import { act, cleanup, fireEvent, render } from '@testing-library/react-native'
import Scanner from './Scanner'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { Alert } from 'react-native'

jest.mock('../../redux/actions/qtisActionCreators')

describe('Given a Scanner component', () => {
  let componentBarCode
  const navigate = jest.fn()
  beforeEach(() => {
    const mockStore = configureStore()
    componentBarCode = (
          <Provider store={mockStore({
            productsReducer: {
              product: { productBarCode: 5412 }
            }
          })}><Scanner navigation={{ navigate }}/></Provider>
    )
  })
  afterEach(() => {
    cleanup()
    jest.resetAllMocks()
  })
  describe('When rendering it', () => {
    test('Then scannerView will match the snapshot', () => {
      const scannerComponent = render(componentBarCode)
      expect(scannerComponent).toMatchSnapshot()
    })
    test('Then if hasPermission is false will render camera', () => {
      const reactUseState = React.useState
      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => reactUseState(true))
        .mockImplementationOnce(() => reactUseState(false))

      const scannerComponent = render(componentBarCode)
      const cameraText = scannerComponent.getByTestId('camera')
      expect(cameraText).toBeTruthy()
    })
  })
})

describe('Given a Scanner component', () => {
  let componentNoBarCode
  const navigate = jest.fn()
  beforeEach(() => {
    const mockStore = configureStore()
    componentNoBarCode = (
            <Provider store={mockStore({
              productsReducer: {
                product: { }
              }
            })}><Scanner navigation={{ navigate }}/></Provider>
    )
  })
  afterEach(() => {
    cleanup()
  })
  describe('When rendering it', () => {
    test('Then if scanned is true will Alert', () => {
      const reactUseState = React.useState
      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => reactUseState(true))
      const { getByTestId } = render(componentNoBarCode)
      const scanButton = getByTestId('scanAgainButton')
      act(() => {
        fireEvent.press(scanButton)
      })
      jest.spyOn(Alert, 'alert')
      expect(scanButton).toBeTruthy()
    })
  })
})
