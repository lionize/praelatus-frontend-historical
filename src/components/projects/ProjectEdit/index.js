import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import actions, { project } from 'modules/project'
import { ProjectForm } from 'components'

class ProjectEdit extends Component {
  componentDidMount() {
    this.props.loadProject(this.props.params.key)
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
  initialValues: project(state.data.projects, params.key)
})

const mapDispatchToProps = dispatch => ({
  loadProject(key) {
    dispatch(actions.fetchRequest({ key }))
  },

  updateProject(values) {
    dispatch(actions.updateRequest(values))
  },
})

ProjectEdit = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectEdit)

export default ProjectEdit
