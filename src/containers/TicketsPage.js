import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchTickets } from 'actions/tickets'
import { ticketsSelector } from 'selectors/tickets'

import TicketList from 'components/TicketList'

class TicketsPage extends Component {
  static propTypes = {
    tickets: PropTypes.object.isRequired,
    fetchTickets: PropTypes.func.isRequired,
  }

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

const mapStateToProps = state => ({
  tickets: ticketsSelector(state),
})

export default connect(mapStateToProps, { fetchTickets })(TicketsPage)
