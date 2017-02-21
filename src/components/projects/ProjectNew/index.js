import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { createRequest } from 'modules/projectRedux'
import { ProjectForm } from 'components'

class ProjectNew extends Component {
  @autobind
  handleSubmit(values) {
    this.props.createProject(values)
  }

  render() {
    return <ProjectForm onSubmit={this.handleSubmit} {...this.props} />
  }
}

ProjectNew = connect(
  () => ({}),
  { createProject: createRequest }
)(ProjectNew)

export default ProjectNew
