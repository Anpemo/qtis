import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react-native'
import store from '../redux/stores/configureStore'

export function renderWithRedux (component) {
  const queries = render(<Provider store={store}>{component}</Provider>)
  return {
    ...queries,
    store
  }
}
