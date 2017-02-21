import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  projects,
  fetchRequest,
} from 'modules/projectRedux'
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

const mapDispatchToProps = dispatch => ({
  loadProjects() {
    dispatch(fetchRequest())
  },
})

ProjectList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectList)

export default ProjectList
