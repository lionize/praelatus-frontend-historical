import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import { connect } from 'react-redux'
import { deleteTicketRequest } from 'actions/tickets'
import { DeleteButton } from 'components'

class TicketDeleteButtonContainer extends Component {
  @autobind
  handleClick(e) {
    e.preventDefault()
    this.props.deleteTicket(this.props.id)
  }

  render() {
    return <DeleteButton handleClick={this.handleClick} />
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  deleteTicket(id) {
    dispatch(deleteTicketRequest(id))
  },
})

TicketDeleteButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDeleteButtonContainer)

export default TicketDeleteButtonContainer
