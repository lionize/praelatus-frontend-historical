import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { createTeamRequest } from 'actions/teams'
import { TeamNew } from 'components/teams'

class TeamNewContainer extends Component {
  @autobind
  handleSubmit(values) {
    this.props.createTeam(values)
  }

  render() {
    return <TeamNew onSubmit={this.handleSubmit} {...this.props} />
  }
}

const mapStateToProps = () => ({})

TeamNewContainer = connect(
  mapStateToProps,
  { createTeam: createTeamRequest }
)(TeamNewContainer)

export default TeamNewContainer
