import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router'

const ProjectLink = ({ project, children }) => (
  <Link to={`/projects/${project.key}`}>
    {children}
  </Link>
)

ProjectLink.propTypes = {
  project: PropTypes.object.isRequired,
  children: PropTypes.node,
}

ProjectLink.defaultProps = {
  children: [],
}

export default ProjectLink
