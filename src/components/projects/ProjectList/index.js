import React, { Component } from 'react'
import { connect } from 'react-redux'
import { projectsSelector } from 'selectors/projects'
import { fetchProjectsRequest } from 'actions/projects'
import { ProjectTable } from 'components'

class ProjectList extends Component {
  componentWillMount() {
    this.props.loadProjects()
  }

  render() {
    return <ProjectTable {...this.props} />
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

ProjectList= connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectList)

export default ProjectList
