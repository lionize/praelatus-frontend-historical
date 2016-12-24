import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProjectRequest } from 'actions/projects'
import { ProjectNew } from 'components/projects'

class ProjectNewContainer extends Component {
  handleSubmit(values) {
    this.props.createProject(values)
  }

  render() {
    return <ProjectNew onSubmit={::this.handleSubmit} {...this.props} />
  }
}

const mapStateToProps = state => ({})

ProjectNewContainer = connect(
  mapStateToProps,
  { createProject: createProjectRequest }
)(ProjectNewContainer)

export default ProjectNewContainer
