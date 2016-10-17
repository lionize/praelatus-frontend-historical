import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import {
  actions,
  ticketsSelector,
} from 'modules/tickets'

import TicketList from 'components/TicketList'

class TicketsView extends Component {
  static propTypes = {
    tickets: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    fetchTicketsRequest: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchTicketsRequest()
  }

  render() {
    const { children, tickets, params } = this.props

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

const mapStateToProps = state => ({
  tickets: ticketsSelector(state),
})

export default connect(mapStateToProps, actions)(TicketsView)
