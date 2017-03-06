import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions, { projects } from 'modules/project'
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
  projects: projects(state.data.projects),
})

ProjectList = connect(
  mapStateToProps,
  { loadProjects: actions.fetchRequest },
)(ProjectList)

export default ProjectList
