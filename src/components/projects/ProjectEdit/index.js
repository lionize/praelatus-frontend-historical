import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { project } from 'modules/project'
import { ProjectForm } from 'components'

export class ProjectEdit extends Component {
  componentWillMount() {
    this.props.loadProject(this.props.params.key)
  }

  render() {
    return <ProjectForm handleSubmit={this.props.updateProject} {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  initialValues: project(state.data.projects, params.key)
})

export default withRouter(connect(
  mapStateToProps,
  {
    loadProject: actions.fetchRequest,
    updateProject: actions.updateRequest,
  },
)(ProjectEdit))
