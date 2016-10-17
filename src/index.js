import React from 'react'
import { render } from 'react-dom'
import configureStore from 'configureStore'
import Root from 'components/Root'
import mySaga from './sagas'

const store = configureStore()
store.runSaga(mySaga)

render(
  <Root store={store} />,
  document.getElementById('root')
)

