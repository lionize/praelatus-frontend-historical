import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'components/App'
import Home from 'components/Home'
import { UserContainer, UserListContainer } from 'containers/users'
import { ProjectContainer, ProjectListContainer } from 'containers/projects'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='users'>
      <IndexRoute component={UserListContainer} />
      <Route path=':id' component={UserContainer} />
    </Route>
    <Route path="projects">
      <IndexRoute component={ProjectListContainer} />
      <Route path=":id" component={ProjectContainer} />
    </Route>
  </Route>
)

export default routes
