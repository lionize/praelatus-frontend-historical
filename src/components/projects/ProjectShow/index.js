import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { project } from 'modules/project'
import { ProjectCard } from 'components'

class ProjectShow extends Component {
  componentDidMount() {
    this.props.loadProject(this.props.params.key)
  }

  componentDidUpdate({ params }) {
    if (params.key !== this.props.params.key) {
      this.props.loadProject(this.props.params.key)
    }
  }

  render() {
    return <ProjectCard {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  project: project(state.data.projects, params.key)
})

const mapDispatchToProps = dispatch => ({
  loadProject(key) {
    dispatch(actions.fetchRequest({ key }))
  },
})

ProjectShow = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectShow))

export default ProjectShow
