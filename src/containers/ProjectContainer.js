import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { projectSelector } from 'selectors/projects'
import { fetchProjectsRequest } from 'actions/projects'
import Project from 'components/Project'

class ProjectContainer extends Component {
  componentWillMount() {
    this.props.loadProject(this.props.params.id)
  }

  render() {
    return <Project {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  project: projectSelector(state, params.id)
})

const mapDispatchToProps = dispatch => ({
  loadProject(id) {
    dispatch(fetchProjectsRequest({id: id}))
  },
})

ProjectContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectContainer))

export default ProjectContainer
