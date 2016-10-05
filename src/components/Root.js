import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from 'components/App'
import TicketsPage from 'containers/TicketsPage'
import ConnectedTicket from 'containers/ConnectedTicket'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path="tickets" component={TicketsPage} />
        <Route path="tickets/:id" component={ConnectedTicket} />
      </Route>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
