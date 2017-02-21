import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import { connect } from 'react-redux'
import { deleteRequest } from 'modules/teamRedux'
import { DeleteButton } from 'components'

class TeamDeleteButton extends Component {
  @autobind
  handleClick(e) {
    e.preventDefault()
    this.props.deleteTeam(this.props.id)
  }

  render() {
    return <DeleteButton handleClick={this.handleClick} />
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTeam(id) {
    dispatch(deleteRequest(id))
  },
})

TeamDeleteButton = connect(null,
  mapDispatchToProps,
)(TeamDeleteButton)

export default TeamDeleteButton
