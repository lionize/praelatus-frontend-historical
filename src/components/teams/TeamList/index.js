import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  teams,
  fetchRequest,
} from 'modules/teamRedux'
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

const mapDispatchToProps = dispatch => ({
  loadTeams() {
    dispatch(fetchRequest())
  },
})

TeamList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamList)

export default TeamList
