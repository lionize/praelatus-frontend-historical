import React, { Component } from 'react'
import { connect } from 'react-redux'
import { teamsSelector } from 'selectors/teams'
import { fetchTeamsRequest } from 'actions/teams'
import { TeamList } from 'components/teams'

class TeamListContainer extends Component {
  componentDidMount() {
    this.props.loadTeams()
  }

  render() {
    return <TeamList {...this.props} />
  }
}

const mapStateToProps = state => ({
  teams: teamsSelector(state),
})

const mapDispatchToProps = dispatch => ({
  loadTeams() {
    dispatch(fetchTeamsRequest())
  },
})

TeamListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamListContainer)

export default TeamListContainer
