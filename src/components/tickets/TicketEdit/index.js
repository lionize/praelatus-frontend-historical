import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import {
  fetchRequest,
  updateRequest,
  ticket,
} from 'modules/ticketRedux'
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
  initialValues: ticket(state.data.tickets, params.id),
})

const mapDispatchToProps = dispatch => ({
  loadTicket(id) {
    dispatch(fetchRequest({ id }))
  },

  updateTicket(values) {
    dispatch(updateRequest(values))
  },
})

TicketEdit = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketEdit))

export default TicketEdit
