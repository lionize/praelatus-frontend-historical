import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { project } from 'modules/project'
import { ProjectForm } from 'components'

export class ProjectEdit extends Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    updateProject: React.PropTypes.func.isRequired,
    loadProject: React.PropTypes.func.isRequired,
    initialValues: React.PropTypes.object,
  }

  componentWillMount() {
    this.props.loadProject(this.props.params.key)
  }

  render() {
    return <ProjectForm handleSubmit={this.props.updateProject} {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => ({
  initialValues: project(state.data.projects, params.key)
})

export default withRouter(connect(
  mapStateToProps,
  {
    loadProject: actions.fetchRequest,
    updateProject: actions.updateRequest,
  },
)(ProjectEdit))
