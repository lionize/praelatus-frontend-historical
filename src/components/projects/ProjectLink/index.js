import React from 'react'
import { Link } from 'react-router'

const ProjectLink = ({ project, children }) => (
  <Link to={`/projects/${project.key}`}>
    {children}
  </Link>
)

ProjectLink.propTypes = {
  project: React.PropTypes.object.isRequired,
  children: React.PropTypes.node,
}

export default ProjectLink
