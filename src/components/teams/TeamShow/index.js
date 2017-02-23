import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {
  team,
  fetchRequest,
} from 'modules/team'
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

const mapStateToProps = (state, { params }) => ({
  team: team(state.data.teams, params.id)
})

const mapDispatchToProps = dispatch => ({
  loadTeam(id) {
    dispatch(fetchRequest({ id }))
  },
})

TeamShow = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamShow))

export default TeamShow
