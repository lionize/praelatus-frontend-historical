import React from 'react'
import { render } from 'react-dom'
import createStore from 'modules'
import Root from 'components/Root'

const { store, history } = createStore()

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)

