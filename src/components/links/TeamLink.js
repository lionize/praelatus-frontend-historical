import React from 'react'
import { Link } from 'react-router'

const TeamLink = ({ id, children }) => (
  <Link to={`/teams/${id}`}>
    {children}
  </Link>
)

export default TeamLink
