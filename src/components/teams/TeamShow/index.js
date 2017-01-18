import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { teamSelector } from 'selectors/teams'
import { fetchTeamsRequest } from 'actions/teams'
import { TeamCard } from 'components'

class TeamShow extends Component {
  componentDidMount() {
    this.props.loadTeam(this.props.params.id)
  }

  componentDidUpdate({ params }) {
    if (params.id !== this.props.params.id) {
      this.props.loadTeam(this.props.params.id)
    }
  }

  render() {
    return <TeamCard {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => {
  const team = teamSelector(state, params.id)

  return {
    team,
  }
}

const mapDispatchToProps = dispatch => ({
  loadTeam(id) {
    dispatch(fetchTeamsRequest({ id }))
  },
})

TeamShow = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamShow))

export default TeamShow
