import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { ticketSelector } from 'selectors/tickets'
import { userSelector } from 'selectors/users'
import { fetchTicketsRequest } from 'actions/tickets'
import { fetchUsersRequest } from 'actions/users'
import { Ticket } from 'components/tickets'

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
  const reporter = ticket ? userSelector(state, ticket.get('reporter')) : null
  const assignee = ticket ? userSelector(state, ticket.get('assignee')) : null

  return {
    ticket,
    reporter,
    assignee,
  }
}

const mapDispatchToProps = dispatch => ({
  loadTicket(id) {
    dispatch(fetchTicketsRequest({id: id}))
  },
})

TicketContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketContainer))

export default TicketContainer
