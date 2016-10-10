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
    const { tickets, params } = this.props

    if (params.id) {
      return (
        <div>
          {params.id}
        </div>
      )
    }

    if (children) {
      return (
        <div>
        {children}
      </div>
      )
    }
    
    return (
      <TicketList tickets={tickets} />
    )
  }
}

const mapStateToProps = (state) => ({
  tickets: ticketsSelector(state)
})

export default connect(mapStateToProps, actions)(TicketsView)
