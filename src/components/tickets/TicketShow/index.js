import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { ticket } from 'modules/ticket'
import { TicketCard } from 'components'

class TicketShow extends Component {
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

const mapDispatchToProps = dispatch => ({
  loadTicket(key) {
    dispatch(actions.fetchRequest({ key }))
  },
})

TicketShow = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketShow))

export default TicketShow
