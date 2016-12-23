import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { projectSelector } from 'selectors/projects'
import { fetchProjectsRequest } from 'actions/projects'
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

  render() {
    return <Project {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => {
  let project = projectSelector(state, params.id)

  return {
    project, 
  }
}

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
