import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {
  project,
  fetchRequest,
} from 'modules/project'
import { ProjectCard } from 'components'

class ProjectShow extends Component {
  componentDidMount() {
    this.props.loadProject(this.props.params.id)
  }

  componentDidUpdate({ params }) {
    if (params.id !== this.props.params.id) {
      this.props.loadProject(this.props.params.id)
    }
  }

  render() {
    return <ProjectCard {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  project: project(state.data.projects, params.id)
})

const mapDispatchToProps = dispatch => ({
  loadProject(id) {
    dispatch(fetchRequest({ id }))
  },
})

ProjectShow = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectShow))

export default ProjectShow
