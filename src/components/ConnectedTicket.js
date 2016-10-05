import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { ticketSelector } from 'selectors/tickets'

import Ticket from 'components/Ticket'

class ConnectedTicket extends Component {
  render() {
    return (
      <Ticket {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const ticket = ticketSelector(state, ownProps.params.id)
  return { ...ticket }
}

export default ConnectedTicket
