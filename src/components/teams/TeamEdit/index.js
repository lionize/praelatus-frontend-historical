import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { team } from 'modules/team'
import { TeamForm } from 'components'

export class TeamEdit extends Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    loadTeam: React.PropTypes.func.isRequired,
    updateTeam: React.PropTypes.func.isRequired,
    initialValues: React.PropTypes.object,
  }

  componentWillMount() {
    this.props.loadTeam(this.props.params.name)
  }

  render() {
    const { updateTeam, initialValues } = this.props
    return <TeamForm handleSubmit={updateTeam} initialValues={initialValues} />
  }
}

const mapStateToProps = (state, { params }) => ({
  initialValues: team(state.data.teams, params.name)
})

export default withRouter(connect(
  mapStateToProps,
  {
    loadTeam: actions.fetchRequest,
    updateTeam: actions.updateRequest,
  },
)(TeamEdit))
