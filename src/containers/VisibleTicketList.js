import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from 'actions'
import { getVisibleTickets } from 'reducers'
import TicketList from 'components/TicketList'

class VisibleTicketList extends Component {
  static propTypes = {
    tickets: PropTypes.object.isRequired,
    fetchTickets: PropTypes.func.isRequired,
  }
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

const mapStateToProps = state => ({
  tickets: getVisibleTickets(state),
})

export default withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTicketList))
