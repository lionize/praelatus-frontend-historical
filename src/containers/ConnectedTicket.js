import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { fetchTickets } from 'actions/tickets'
import { ticketSelector } from 'selectors/tickets'

import Ticket from 'components/Ticket'

class ConnectedTicket extends Component {
  componentWillMount() {
    this.props.dispatch(fetchTickets())
  }

  render() {
    return (
      <Ticket {...this.props} />
    )
  }
}

const mapStateToProps = (state, { params }) => {
  const ticket = ticketSelector(state, params.id)
  return { ...ticket }
}

ConnectedTicket = withRouter(connect(
  mapStateToProps,
)(ConnectedTicket))

export default ConnectedTicket
