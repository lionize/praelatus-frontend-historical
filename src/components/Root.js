import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from 'components/App'
import TicketsPage from 'containers/TicketsPage'
import Ticket from 'components/Ticket'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path="tickets" component={TicketsPage} />
        <Route path="tickets/:id" component={Ticket} />
      </Route>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
