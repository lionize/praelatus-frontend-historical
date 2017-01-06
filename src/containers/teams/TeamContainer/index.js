import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { teamSelector } from 'selectors/teams'
import { fetchTeamsRequest } from 'actions/teams'
import { Team } from 'components'

class TeamContainer extends Component {
  componentDidMount() {
    this.props.loadTeam(this.props.params.id)
  }

  componentDidUpdate({ params }) {
    if (params.id !== this.props.params.id) {
      this.props.loadTeam(this.props.params.id)
    }
  }

  render() {
    return <Team {...this.props} />
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

TeamContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamContainer))

export default TeamContainer
