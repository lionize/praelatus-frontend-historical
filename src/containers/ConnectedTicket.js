import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { fetchTickets } from 'actions/tickets'
import { ticketSelector, loadingSelector } from 'selectors/tickets'

import Ticket from 'components/Ticket'

class ConnectedTicket extends Component {
  static defaultProps = {
    loading: true,
  }

  static propTypes = {
    fetchTickets: PropTypes.func.isRequired,
    ticket: PropTypes.object.isRequired,
    loading: PropTypes.bool,
  }

  componentWillMount() {
    this.props.fetchTickets()
  }

  render() {
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

export default withRouter(connect(
  mapStateToProps,
  { fetchTickets }
)(ConnectedTicket))
