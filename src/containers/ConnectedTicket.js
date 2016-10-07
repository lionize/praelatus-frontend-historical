import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { fetchTickets } from 'actions/tickets'
import { ticketSelector, loadingSelector } from 'selectors/tickets'

import Ticket from 'components/Ticket'

class ConnectedTicket extends Component {
  static defaultProps = {
    loading: true
  }

  componentWillMount() {
    this.props.dispatch(fetchTickets())
  }

  render() {
    console.log(this.props.loading)
    if (this.props.loading) {
      return (
        <span>Loading...</span>
      )
    }

    return (
      <Ticket {...this.props.ticket} />
    )
  }
}

const mapStateToProps = (state, { params }) => {
  const ticket = ticketSelector(state, params.id)
  const loading = loadingSelector(state)
  return { ticket, loading }
}

ConnectedTicket = withRouter(connect(
  mapStateToProps,
)(ConnectedTicket))

export default ConnectedTicket
