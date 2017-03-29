import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import actions from 'modules/project'
import { ProjectForm } from 'components'

export class ProjectNew extends Component {
  render() {
    return <ProjectForm handleSubmit={this.props.createProject} />
  }
}

export default connect(null,
  { createProject: actions.createRequest }
)(ProjectNew)
