import React from 'react'
import { render } from 'react-dom'
import configureStore from 'configureStore'
import Root from 'components/Root'
import sagasManager from 'sagasManager'
import sagas from 'sagas'

sagas.forEach(saga =>
  sagasManager.addSagaToRoot(saga)
)

const store = configureStore()

store.runSaga(sagasManager.getRootSaga())

render(
  <Root store={store} />,
  document.getElementById('root')
)

