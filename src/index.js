import React from 'react'
import { render } from 'react-dom'
import { store, history } from 'initialize'
import Root from 'components/Root'

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)

