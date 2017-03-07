import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import actions, { ticket } from 'modules/ticket'
import { TicketForm } from 'components'

class TicketEdit extends Component {
  componentDidMount() {
    this.props.loadTicket(this.props.params.key)
  }

  @autobind
  handleSubmit(values) {
    this.props.updateTicket(values)
  }

  render() {
    return <TicketForm onSubmit={this.handleSubmit} {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => {
  return {
    initialValues: ticket(state.data.tickets, params.key),
  }
}

const mapDispatchToProps = dispatch => ({
  loadTicket(key) {
    dispatch(actions.fetchRequest({ key }))
  },

  updateTicket(values) {
    dispatch(actions.updateRequest(values))
  },
})

TicketEdit = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketEdit))

export default TicketEdit
