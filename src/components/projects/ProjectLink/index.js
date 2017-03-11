import React from 'react'
import { Link } from 'react-router'

const ProjectLink = ({ project, children }) => (
  <Link to={`/projects/${project.key}`}>
    {children}
  </Link>
)

export default ProjectLink
