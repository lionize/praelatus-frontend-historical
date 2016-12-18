import React, { Component } from 'react'
import { connect } from 'react-redux'
import { projectsSelector } from 'selectors/projects'
import { fetchProjectsRequest } from 'actions/projects'
import ProjectList from 'components/ProjectList'

class ProjectListContainer extends Component {
  componentWillMount() {
    this.props.loadProjects()
  }

  render() {
    return <ProjectList {...this.props} />
  }
}

const mapStateToProps = state => ({
  projects: projectsSelector(state),
})

const mapDispatchToProps = dispatch => ({
  loadProjects() {
    dispatch(fetchProjectsRequest())
  },
})

ProjectListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectListContainer)

export default ProjectListContainer
