import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import actions from 'modules/team'
import { TeamForm } from 'components'

class TeamNew extends Component {
  @autobind
  handleSubmit(values) {
    this.props.createTeam(values)
  }

  render() {
    return <TeamForm onSubmit={this.handleSubmit} {...this.props} />
  }
}

const mapStateToProps = () => ({})

TeamNew = connect(
  mapStateToProps,
  { createTeam: actions.createRequest }
)(TeamNew)

export default TeamNew
