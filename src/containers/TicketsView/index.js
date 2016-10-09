import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from 'modules/tickets'
import { ticketsSelector } from 'modules/tickets'

import TicketList from 'components/TicketList'
import styles from './ticketsView.css'

class TicketsView extends Component {
  componentWillMount() {
    this.props.fetchTickets()
  }

  render() {
    const { tickets } = this.props

    return (
      <TicketList tickets={tickets} />
    )
  }
}

const mapStateToProps = (state) => ({
  tickets: ticketsSelector(state)
})

export default connect(mapStateToProps, actions)(TicketsView)
