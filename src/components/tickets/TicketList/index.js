import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  tickets,
  fetchRequest,
} from 'modules/ticket'
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
  tickets: tickets(state.data.tickets),
})

const mapDispatchToProps = dispatch => ({
  loadTickets() {
    dispatch(fetchRequest())
  },
})

TicketList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketList)

export default TicketList
