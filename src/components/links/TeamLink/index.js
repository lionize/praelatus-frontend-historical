import React from 'react'
import { Link } from 'react-router'

const TeamLink = ({ name, children }) => (
  <Link to={`/teams/${name}`}>
    {children}
  </Link>
)

export default TeamLink
