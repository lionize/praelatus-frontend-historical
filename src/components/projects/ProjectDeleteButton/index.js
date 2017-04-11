import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import actions from 'modules/project'
import { DeleteButton } from 'components'

const ProjectDeleteButton = ({ project, deleteProject }) => (
  <DeleteButton handleClick={() => { deleteProject(project.key) }} />
)

ProjectDeleteButton.propTypes = {
  project: PropTypes.object.isRequired,
  deleteProject: PropTypes.func.isRequired,
}

export { ProjectDeleteButton }

export default connect(null,
  { deleteProject: actions.deleteRequest },
)(ProjectDeleteButton)
