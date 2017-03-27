import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

export const wrapWithProvider = (Component, { props = {}, state = {} } = {}) => {
  const store = configureStore()(state)

  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
}
