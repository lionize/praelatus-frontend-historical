import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import { connect } from 'react-redux'
import { deleteRequest } from 'modules/ticket'
import { DeleteButton } from 'components'

class TicketDeleteButton extends Component {
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
    dispatch(deleteRequest(id))
  },
})

TicketDeleteButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDeleteButton)

export default TicketDeleteButton
