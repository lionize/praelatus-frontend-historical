import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'components/App'
import Home from 'components/Home'
import ProjectContainer from 'containers/ProjectContainer'
import ProjectListContainer from 'containers/ProjectListContainer'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path="projects">
      <IndexRoute component={ProjectListContainer} />
      <Route path=":id" component={ProjectContainer} />
    </Route>
  </Route>
)

export default routes
