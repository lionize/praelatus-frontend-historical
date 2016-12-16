import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'components/App'
import Home from 'components/Home'
import UserContainer from 'containers/UserContainer'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='users'>
      <Route path=':id' component={UserContainer} />
    </Route>
  </Route>
)

export default routes
