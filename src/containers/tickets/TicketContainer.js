import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { ticketSelector } from 'selectors/tickets'
import { fetchTicketsRequest } from 'actions/tickets'
import { Ticket } from 'components'

class TicketContainer extends Component {
  componentWillMount() {
    this.props.loadTicket(this.props.params.id)
  }

  componentDidUpdate({ params }) {
    if (params.id !== this.props.params.id) {
      this.props.loadTicket(this.props.params.id)
    }
  }

  render() {
    return <Ticket {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => {
  const ticket = ticketSelector(state, params.id)

  return {
    ticket,
  }
}

const mapDispatchToProps = dispatch => ({
  loadTicket(id) {
    dispatch(fetchTicketsRequest({ id }))
  },
})

TicketContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketContainer))

export default TicketContainer
