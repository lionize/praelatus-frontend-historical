import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { team } from 'modules/team'
import { TeamCard } from 'components'

export class TeamShow extends Component {
  componentWillMount() {
    this.props.loadTeam(this.props.params.name)
  }

  componentDidUpdate({ params }) {
    if (params.name !== this.props.params.name) {
      this.props.loadTeam(this.props.params.name)
    }
  }

  render() {
    return <TeamCard {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  team: team(state.data.teams, params.name)
})

export default withRouter(connect(
  mapStateToProps,
  { loadTeam: actions.fetchRequest },
)(TeamShow))
