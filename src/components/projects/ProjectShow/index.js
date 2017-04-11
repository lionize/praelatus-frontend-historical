import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions, { project } from 'modules/project'
import { ProjectCard } from 'components'

export class ProjectShow extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    loadProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.loadProject(this.props.params.key)
  }

  componentDidUpdate({ params }) {
    if (params.key !== this.props.params.key) {
      this.props.loadProject(this.props.params.key)
    }
  }

  render() {
    const { project: projectProp } = this.props
    return <ProjectCard project={projectProp} />
  }
}

const mapStateToProps = (state, { params }) => ({
  project: project(state, params.key)
})

export default withRouter(connect(
  mapStateToProps,
  { loadProject: actions.fetchRequest },
)(ProjectShow))
