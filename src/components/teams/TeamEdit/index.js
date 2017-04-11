import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { team } from 'modules/team'
import { TeamForm } from 'components'

export class TeamEdit extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    loadTeam: PropTypes.func.isRequired,
    updateTeam: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
  }

  static defaultProps = {
    initialValues: {},
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
  initialValues: team(state, params.name)
})

export default withRouter(connect(
  mapStateToProps,
  {
    loadTeam: actions.fetchRequest,
    updateTeam: actions.updateRequest,
  },
)(TeamEdit))
