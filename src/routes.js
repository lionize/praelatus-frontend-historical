import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'components/App'
import Home from 'components/Home'
import ProjectContainer from 'containers/ProjectContainer'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path="projects">
      <Route path=":id" component={ProjectContainer} />
    </Route>
  </Route>
)

export default routes
