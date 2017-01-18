import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'components/App'
import Home from 'components/Home'
import {
  TicketContainer, TicketNewContainer, TicketEditContainer, TicketListContainer,
  TeamListContainer,
} from 'containers'
import {
  ProjectShow, ProjectNew, ProjectList,
  TeamShow, TeamNew,
  UserShow, UserList,
  Login, Register,
} from 'components'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='login' component={Login} />
    <Route path='register' component={Register} />
    <Route path='users'>
      <IndexRoute component={UserList} />
      <Route path=':id' component={UserShow} />
    </Route>
    <Route path="projects">
      <IndexRoute component={ProjectList} />
      <Route path="new" component={ProjectNew} />
      <Route path=":id" component={ProjectShow} />
    </Route>
    <Route path="tickets">
      <IndexRoute component={TicketListContainer} />
      <Route path="new" component={TicketNewContainer} />
      <Route path=":id/edit" component={TicketEditContainer} />
      <Route path=":id" component={TicketContainer} />
    </Route>
    <Route path="teams">
      <IndexRoute component={TeamListContainer} />
      <Route path="new" component={TeamNew} />
      <Route path=":id" component={TeamShow} />
    </Route>
  </Route>
)

export default routes
