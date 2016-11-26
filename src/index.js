import React from 'react'
import { render } from 'react-dom'
import configureStore from 'configureStore'
import Root from 'components/Root'
import sagasManager from 'sagasManager'

const store = configureStore()

store.runSaga(sagasManager.getRootSaga())

render(
  <Root store={store} />,
  document.getElementById('root')
)

