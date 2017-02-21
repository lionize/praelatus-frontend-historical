import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { createRequest } from 'modules/ticketRedux'
import { TicketForm } from 'components'

class TicketNew extends Component {
  @autobind
  handleSubmit(values) {
    this.props.createTicket(values)
  }

  render() {
    return <TicketForm onSubmit={this.handleSubmit} {...this.props} />
  }
}

const mapStateToProps = () => ({})

TicketNew = connect(
  mapStateToProps,
  { createTicket: createRequest }
)(TicketNew)

export default TicketNew
