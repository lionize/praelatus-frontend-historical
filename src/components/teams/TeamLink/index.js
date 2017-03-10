import React from 'react'
import { Link } from 'react-router'

const TeamLink = ({ team, children }) => (
  <Link to={`/teams/${team.name}`}>
    {children}
  </Link>
)

export default TeamLink
