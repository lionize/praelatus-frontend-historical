import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ticketsSelector } from 'selectors/tickets'
import { fetchTicketsRequest } from 'actions/tickets'
import { TicketList } from 'components'

class TicketListContainer extends Component {
  componentDidMount() {
    this.props.loadTickets()
  }

  render() {
    return <TicketList {...this.props} />
  }
}

const mapStateToProps = state => ({
  tickets: ticketsSelector(state),
})

const mapDispatchToProps = dispatch => ({
  loadTickets() {
    dispatch(fetchTicketsRequest())
  },
})

TicketListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketListContainer)

export default TicketListContainer
