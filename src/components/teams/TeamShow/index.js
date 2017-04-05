import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { team } from 'modules/team'
import { TeamCard } from 'components'

export class TeamShow extends Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    loadTeam: React.PropTypes.func.isRequired,
    team: React.PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.loadTeam(this.props.params.name)
  }

  componentDidUpdate({ params }) {
    if (params.name !== this.props.params.name) {
      this.props.loadTeam(this.props.params.name)
    }
  }

  render() {
    const { team: teamProp } = this.props
    return <TeamCard team={teamProp} />
  }
}

const mapStateToProps = (state, { params }) => ({
  team: team(state, params.name)
})

export default withRouter(connect(
  mapStateToProps,
  { loadTeam: actions.fetchRequest },
)(TeamShow))
