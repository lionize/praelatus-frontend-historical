import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions, { teams } from 'modules/team'
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
  teams: teams(state.data.teams),
})

TeamList = connect(
  mapStateToProps,
  { loadTeams: actions.fetchRequest },
)(TeamList)

export default TeamList
