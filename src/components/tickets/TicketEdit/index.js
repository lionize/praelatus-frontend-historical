import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { ticket } from 'modules/ticket'
import { TicketForm } from 'components'

export class TicketEdit extends Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    loadTicket: React.PropTypes.func.isRequired,
    updateTicket: React.PropTypes.func.isRequired,
    initialValues: React.PropTypes.object,
  }

  componentWillMount() {
    this.props.loadTicket(this.props.params.key)
  }

  render() {
    const { updateTicket, initialValues } = this.props
    return <TicketForm handleSubmit={updateTicket} initialValues={initialValues} />
  }
}

const mapStateToProps = (state, { params }) => {
  return {
    initialValues: ticket(state.data.tickets, params.key),
  }
}

export default withRouter(connect(
  mapStateToProps,
  {
    loadTicket: actions.fetchRequest,
    updateTicket: actions.updateRequest,
  },
)(TicketEdit))
