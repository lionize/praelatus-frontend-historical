import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { ticket } from 'modules/ticket'
import { TicketCard } from 'components'

export class TicketShow extends Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    loadTicket: React.PropTypes.func.isRequired,
    ticket: React.PropTypes.object,
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
    return <TicketCard {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  ticket: ticket(state.data.tickets, params.key),
})

export default withRouter(connect(
  mapStateToProps,
  { loadTicket: actions.fetchRequest }
)(TicketShow))
