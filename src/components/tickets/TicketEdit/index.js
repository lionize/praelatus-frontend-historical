import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { fetchTicketsRequest, updateTicketRequest } from 'actions/tickets'
import { ticketSelector } from 'selectors/tickets'
import { TicketForm } from 'components'

class TicketEdit extends Component {
  componentDidMount() {
    this.props.loadTicket(this.props.params.id)
  }

  @autobind
  handleSubmit(values) {
    this.props.updateTicket(values)
  }

  render() {
    return <TicketForm onSubmit={this.handleSubmit} {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  initialValues: ticketSelector(state, params.id),
})

const mapDispatchToProps = dispatch => ({
  loadTicket(id) {
    dispatch(fetchTicketsRequest({ id }))
  },

  updateTicket(values) {
    dispatch(updateTicketRequest(values))
  },
})

TicketEdit = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketEdit))

export default TicketEdit
