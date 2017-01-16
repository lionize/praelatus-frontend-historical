import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { createTicketRequest } from 'actions/tickets'
import { TicketForm } from 'components'

class TicketNewContainer extends Component {
  @autobind
  handleSubmit(values) {
    this.props.createTicket(values)
  }

  render() {
    return <TicketForm onSubmit={this.handleSubmit} {...this.props} />
  }
}

const mapStateToProps = () => ({})

TicketNewContainer = connect(
  mapStateToProps,
  { createTicket: createTicketRequest }
)(TicketNewContainer)

export default TicketNewContainer
