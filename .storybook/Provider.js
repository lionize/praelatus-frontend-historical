import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider as ReduxProvider } from 'react-redux'

let store = configureStore()({})

export default function Provider(story) {
  return (
    <ReduxProvider store={store}>
      {story()}
    </ReduxProvider>
  )
}
