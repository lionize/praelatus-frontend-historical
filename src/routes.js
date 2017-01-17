import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'components/App'
import Home from 'components/Home'
import {
  UserContainer, UserListContainer,
  ProjectContainer, ProjectNewContainer, ProjectListContainer,
  TicketContainer, TicketNewContainer, TicketEditContainer, TicketListContainer,
  TeamContainer, TeamNewContainer, TeamListContainer,
} from 'containers'
import {
  Login, Register,
} from 'components'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='login' component={Login} />
    <Route path='register' component={Register} />
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
      <Route path="new" component={TicketNewContainer} />
      <Route path=":id/edit" component={TicketEditContainer} />
      <Route path=":id" component={TicketContainer} />
    </Route>
    <Route path="teams">
      <IndexRoute component={TeamListContainer} />
      <Route path="new" component={TeamNewContainer} />
      <Route path=":id" component={TeamContainer} />
    </Route>
  </Route>
)

export default routes
