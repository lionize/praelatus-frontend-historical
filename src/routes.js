import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'components/App'
import Home from 'components/Home'
import { UserContainer, UserListContainer, ProjectContainer, ProjectNewContainer, ProjectListContainer, TicketContainer, TicketListContainer, TeamContainer, TeamListContainer } from 'containers'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='users'>
      <IndexRoute component={UserListContainer} />
      <Route path=':id' component={UserContainer} />
    </Route>
    <Route path="projects">
      <IndexRoute component={ProjectListContainer} />
      <Route path="new" component={ProjectNewContainer} />
      <Route path=":id" component={ProjectContainer} />
    </Route>
    <Route path="tickets">
      <IndexRoute component={TicketListContainer} />
      <Route path=":id" component={TicketContainer} />
    </Route>
    <Route path="teams">
      <IndexRoute component={TeamListContainer} />
      <Route path=":id" component={TeamContainer} />
    </Route>
  </Route>
)

export default routes
