import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { ticket } from 'modules/ticket'
import { TicketForm } from 'components'

export class TicketEdit extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    loadTicket: PropTypes.func.isRequired,
    updateTicket: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
  }

  static defaultProps = {
    initialValues: {},
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
    initialValues: ticket(state, params.key),
  }
}

export default withRouter(connect(
  mapStateToProps,
  {
    loadTicket: actions.fetchRequest,
    updateTicket: actions.updateRequest,
  },
)(TicketEdit))
