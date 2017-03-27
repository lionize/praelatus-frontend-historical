import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import { connect } from 'react-redux'
import actions from 'modules/project'
import { DeleteButton } from 'components'

const ProjectDeleteButton = ({ project, deleteProject }) => (
  <DeleteButton handleClick={() => { deleteProject(project.key) }} />
)

export { ProjectDeleteButton }

export default connect(null,
  { deleteProject: actions.deleteRequest },
)(ProjectDeleteButton)
