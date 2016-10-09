import React from 'react'
import { Route } from 'react-router'

import App from 'components/App'
import TicketsView from 'containers/TicketsView'
import TicketsSidebar from 'containers/TicketsSidebar'

const routes = (
  <Route path='/' component={App}>
    <Route path="tickets" components={{main: TicketsView, sidebar: TicketsSidebar}} />
  </Route>
)

export default routes
