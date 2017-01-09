import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { createProjectRequest } from 'actions/projects'
import { ProjectNew } from 'components'

class ProjectNewContainer extends Component {
  @autobind
  handleSubmit(values) {
    this.props.createProject(values)
  }

  render() {
    return <ProjectNew onSubmit={this.handleSubmit} {...this.props} />
  }
}

ProjectNewContainer = connect(
  () => ({}),
  { createProject: createProjectRequest }
)(ProjectNewContainer)

export default ProjectNewContainer
