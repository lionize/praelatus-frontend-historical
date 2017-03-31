import React from 'react'
import { connect } from 'react-redux'
import actions from 'modules/project'
import { ProjectForm } from 'components'

export const ProjectNew = ({ createProject }) => (
  <ProjectForm handleSubmit={createProject} />
)

ProjectNew.propTypes = {
  createProject: React.PropTypes.func.isRequired,
}

export default connect(null,
  { createProject: actions.createRequest }
)(ProjectNew)
