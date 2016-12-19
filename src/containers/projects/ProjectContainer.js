import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { projectSelector } from 'selectors/projects'
import { userSelector } from 'selectors/users'
import { fetchProjectsRequest } from 'actions/projects'
import { fetchUsersRequest } from 'actions/users'
import { Project } from 'components/projects'

class ProjectContainer extends Component {
  componentDidMount() {
    this.props.loadProject(this.props.params.id)
  }

  componentDidUpdate({ params }) {
    if (params.id !== this.props.params.id) {
      this.props.loadProject(this.props.params.id)
    }
  }

  componentWillReceiveProps({ project, lead }) {
    if (project && lead == null) {
      this.props.loadUser(project.lead)
    }
  }

  render() {
    return <Project {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => {
  const project = projectSelector(state, params.id)
  const lead = project ? userSelector(state, project.get('lead')) : null

  return {
    project, 
    lead,
  }
}

const mapDispatchToProps = dispatch => ({
  loadProject(id) {
    dispatch(fetchProjectsRequest({id: id}))
  },
  loadUser(id) {
    dispatch(fetchUsersRequest({id: id}))
  }
})

ProjectContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectContainer))

export default ProjectContainer
