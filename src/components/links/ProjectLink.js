import React from 'react'
import { Link } from 'react-router'

const ProjectLink = ({ id, children }) => (
  <Link to={`/projects/${id}`}>
    {children}
  </Link>
)

export default ProjectLink
