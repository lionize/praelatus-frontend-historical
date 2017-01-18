import React, { Component } from 'react'
import { connect } from 'react-redux'
import { teamsSelector } from 'selectors/teams'
import { fetchTeamsRequest } from 'actions/teams'
import { TeamTable } from 'components'

class TeamList extends Component {
  componentDidMount() {
    this.props.loadTeams()
  }

  render() {
    return <TeamTable {...this.props} />
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

TeamList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamList)

export default TeamList
