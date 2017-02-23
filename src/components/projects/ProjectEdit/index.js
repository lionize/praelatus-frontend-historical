import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import {
  fetchRequest,
  updateRequest,
  project,
} from 'modules/project'
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
  initialValues: project(state.data.projects, params.id)
})

const mapDispatchToProps = dispatch => ({
  loadProject(id) {
    dispatch(fetchRequest({ id }))
  },

  updateProject(values) {
    dispatch(updateRequest(values))
  },
})

ProjectEdit = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectEdit)

export default ProjectEdit
