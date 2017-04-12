import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider as ReduxProvider } from 'react-redux'

export default function Provider(story, storeProps = {}) {
  let store = configureStore()(storeProps)
  
  return (
    <ReduxProvider store={store}>
      {story()}
    </ReduxProvider>
  )
}
