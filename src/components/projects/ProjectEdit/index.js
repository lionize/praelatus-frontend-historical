import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { fetchProjectsRequest, updateProjectRequest } from 'actions/projects'
import { projectSelector } from 'selectors/projects'
import { ProjectForm } from 'components'

class ProjectEdit extends Component {
  componentDidMount() {
    this.props.loadProject(this.props.params.id)
  }

  @autobind
  handleSubmit(values) {
    this.props.updateProject(values)
  }

  render() {
    return <ProjectForm onSubmit={this.handleSubmit} {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  initialValues: projectSelector(state, params.id)
})

const mapDispatchToProps = dispatch => ({
  loadProject(id) {
    dispatch(fetchProjectsRequest({ id }))
  },

  updateProject(values) {
    dispatch(updateProjectRequest(values))
  },
})

ProjectEdit = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectEdit)

export default ProjectEdit
