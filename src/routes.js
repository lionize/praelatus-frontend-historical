import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'components/App'
import Home from 'components/Home'
import UserContainer from 'containers/UserContainer'
import UserListContainer from 'containers/UserListContainer'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='users'>
      <IndexRoute component={UserListContainer} />
      <Route path=':id' component={UserContainer} />
    </Route>
  </Route>
)

export default routes
