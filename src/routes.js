import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'components/App'
import Home from 'components/Home'
import {
  ProjectShow, ProjectNew, ProjectList,
  TicketShow, TicketNew, TicketEdit, TicketList,
  TeamShow, TeamNew, TeamList,
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
      <IndexRoute component={TicketList} />
      <Route path="new" component={TicketNew} />
      <Route path=":id/edit" component={TicketEdit} />
      <Route path=":id" component={TicketShow} />
    </Route>
    <Route path="teams">
      <IndexRoute component={TeamList} />
      <Route path="new" component={TeamNew} />
      <Route path=":id" component={TeamShow} />
    </Route>
  </Route>
)

export default routes
