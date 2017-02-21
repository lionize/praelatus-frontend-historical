import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {
  ticket,
  fetchRequest,
} from 'modules/ticketRedux'
import { TicketCard } from 'components'

class TicketShow extends Component {
  componentWillMount() {
    this.props.loadTicket(this.props.params.id)
  }

  componentDidUpdate({ params }) {
    if (params.id !== this.props.params.id) {
      this.props.loadTicket(this.props.params.id)
    }
  }

  render() {
    return <TicketCard {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => {
  const ticket = tickets(state.data.tickets, params.id)

  return {
    ticket,
  }
}

const mapDispatchToProps = dispatch => ({
  loadTicket(id) {
    dispatch(fetchRequest({ id }))
  },
})

TicketShow = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketShow))

export default TicketShow
