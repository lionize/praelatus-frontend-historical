import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import { connect } from 'react-redux'
import { deleteRequest } from 'modules/team'
import { DeleteButton } from 'components'

class TeamDeleteButton extends Component {
  @autobind
  handleClick(e) {
    e.preventDefault()
    this.props.deleteTeam(this.props.team.name)
  }

  render() {
    return <DeleteButton handleClick={this.handleClick} />
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTeam(name) {
    dispatch(deleteRequest(name))
  },
})

TeamDeleteButton = connect(null,
  mapDispatchToProps,
)(TeamDeleteButton)

export default TeamDeleteButton
