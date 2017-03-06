import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import actions, { team } from 'modules/team'
import { TeamForm } from 'components'

class TeamEdit extends Component {
  componentDidMount() {
    this.props.loadTeam(this.props.params.name)
  }

  @autobind
  handleSubmit(values) {
    this.props.updateTeam(values)
  }

  render() {
    return <TeamForm onSubmit={this.handleSubmit} {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  initialValues: team(state.data.teams, params.name)
})

const mapDispatchToProps = dispatch => ({
  loadTeam(name) {
    dispatch(actions.fetchRequest({ name }))
  },

  updateTeam(values) {
    dispatch(actions.updateRequest(values))
  },
})

TeamEdit = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamEdit)

export default TeamEdit
