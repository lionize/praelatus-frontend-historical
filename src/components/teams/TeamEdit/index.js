import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import {
  fetchRequest,
  updateRequest,
  team,
} from 'modules/teamRedux'
import { TeamForm } from 'components'

class TeamEdit extends Component {
  componentDidMount() {
    this.props.loadTeam(this.props.params.id)
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
  initialValues: team(state.data.teams, params.id)
})

const mapDispatchToProps = dispatch => ({
  loadTeam(id) {
    dispatch(fetchRequest({ id }))
  },

  updateTeam(values) {
    dispatch(updateRequest(values))
  },
})

TeamEdit = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamEdit)

export default TeamEdit
