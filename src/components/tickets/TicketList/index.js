import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ticketsSelector } from 'selectors/tickets'
import { fetchTicketsRequest } from 'actions/tickets'
import { TicketTable } from 'components'

class TicketList extends Component {
  componentDidMount() {
    this.props.loadTickets()
  }

  render() {
    return <TicketTable {...this.props} />
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

TicketList= connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketList)

export default TicketList
