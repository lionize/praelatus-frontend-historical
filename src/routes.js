import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  App,
  ProjectShow,
  ProjectNew,
  ProjectEdit,
  ProjectList,
  TicketShow,
  TicketNew,
  TicketEdit,
  TicketList,
  TeamShow,
  TeamNew,
  TeamEdit,
  TeamList,
  UserShow,
  UserList,
  Login,
  Register,
  Home,
} from 'components';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
    <Route path="users">
      <IndexRoute component={UserList} />
      <Route path=":username" component={UserShow} />
    </Route>
    <Route path="projects">
      <IndexRoute component={ProjectList} />
      <Route path="new" component={ProjectNew} />
      <Route path=":key/edit" component={ProjectEdit} />
      <Route path=":key" component={ProjectShow} />
    </Route>
    <Route path="tickets">
      <IndexRoute component={TicketList} />
      <Route path="new" component={TicketNew} />
      <Route path=":key/edit" component={TicketEdit} />
      <Route path=":key" component={TicketShow} />
    </Route>
    <Route path="teams">
      <IndexRoute component={TeamList} />
      <Route path="new" component={TeamNew} />
      <Route path=":name/edit" component={TeamEdit} />
      <Route path=":name" component={TeamShow} />
    </Route>
  </Route>
);

export default routes;
