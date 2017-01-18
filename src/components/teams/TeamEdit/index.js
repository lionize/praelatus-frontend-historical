import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { fetchTeamsRequest, updateTeamRequest } from 'actions/teams'
import { teamSelector } from 'selectors/teams'
import { TeamForm } from 'components'

class TeamEdit extends Component {
  componentDidMount() {
    this.props.loadTeam(this.props.params.id)
  }

  @autobind
  handleSubmit(values) {
    this.props.updateTeam(values)
  }

  render() {
    return <TeamForm onSubmit={this.handleSubmit} {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  initialValues: teamSelector(state, params.id)
})

const mapDispatchToProps = dispatch => ({
  loadTeam(id) {
    dispatch(fetchTeamsRequest({ id }))
  },

  updateTeam(values) {
    dispatch(updateTeamRequest(values))
  },
})

TeamEdit = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamEdit)

export default TeamEdit
