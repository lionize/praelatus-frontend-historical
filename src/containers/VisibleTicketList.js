import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from 'actions'
import { getVisibleTickets } from 'reducers'
import TicketList from 'components/TicketList'

class VisibleTicketList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    const { fetchTickets } = this.props
    fetchTickets()
  }

  render() {
    const { tickets } = this.props

    return (
      <TicketList
        tickets={tickets}
      />
    )
  }
}

const mapStateToProps = (state, { params }) => ({
  tickets: getVisibleTickets(state)
})

VisibleTicketList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTicketList))

export default VisibleTicketList
