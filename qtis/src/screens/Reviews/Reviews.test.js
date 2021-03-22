import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Reviews from './Reviews'
import * as actions from '../../redux/actions/qtisActionCreators'
jest.mock('../../redux/actions/qtisActionCreators')

const mockedNavigate = jest.fn()
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate
    })
  }
})
describe('Given an Reviews function', () => {
  let component
  let params
  let navigate
  beforeEach(() => {
    const mockStore = configureStore()
    navigate = jest.fn()
    params = { productBarCode: 123123123 }
    component = (
      <Provider store={mockStore({
        reviewsReducer: {
          reviews: [
            {
              brandName: 'Ives',
              userPicture: 'Crema facial',
              rating: 19,
              productCategory: 'creams',
              _id: 1
            },
            {
              brandName: 'Ives',
              userPicture: 'Crema facial',
              rating: 19,
              productCategory: 'creams',
              _id: 2

            }
          ]

        }
      })}>
        <Reviews route={{ params }} />
        </Provider>
    )
    jest.spyOn(actions, 'fetchReviews').mockReturnValue({ type: '' })
  })
  afterEach(cleanup)
  describe('when pressing to plus icon', () => {
    test('Then it will navigate', () => {
      const { getByTestId } = render(component)
      const button = getByTestId('navigateAddReview')
      fireEvent.press(button)
      expect(navigate).toHaveBeenCalled()
    })
  })
  describe('when reviews has no length', () => {
    test('Then it will render there are no reviews', () => {
      const mockStore = configureStore()

      component = (
            <Provider store={mockStore({
              reviewsReducer: {
                reviews: []

              }
            })}>
              <Reviews route={{ params }} />
              </Provider>
      )
      const { getByText } = render(component)
      const text = getByText('There are no reviews')
      expect(text).toBeTruthy()
    })
  })
})
