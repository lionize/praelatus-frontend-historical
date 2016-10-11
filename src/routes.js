import React from 'react'
import { Route } from 'react-router'

import App from 'components/App'
import TicketsView from 'containers/TicketsView'
import TicketsSidebar from 'containers/TicketsSidebar'
import TicketDisplay from 'containers/TicketDisplay'

const routes = (
  <Route path='/' component={App}>
    <Route path="tickets" components={{ main: TicketsView, sidebar: TicketsSidebar }}>
      <Route path=":id" component={TicketDisplay} />
    </Route>
  </Route>
)

export default routes
