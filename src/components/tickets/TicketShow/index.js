import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { ticket } from 'modules/ticket'
import { TicketCard } from 'components'

export class TicketShow extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    loadTicket: PropTypes.func.isRequired,
    ticket: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.loadTicket(this.props.params.key)
  }

  componentDidUpdate({ params }) {
    if (params.key !== this.props.params.key) {
      this.props.loadTicket(this.props.params.key)
    }
  }

  render() {
    const { ticket: ticketProp } = this.props
    return <TicketCard ticket={ticketProp} />
  }
}

const mapStateToProps = (state, { params }) => ({
  ticket: ticket(state, params.key),
})

export default withRouter(connect(
  mapStateToProps,
  { loadTicket: actions.fetchRequest }
)(TicketShow))
