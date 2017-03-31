import React from 'react'
import { Link } from 'react-router'

const TeamLink = ({ team, children }) => (
  <Link to={`/teams/${team.name}`}>
    {children}
  </Link>
)

TeamLink.propTypes = {
  team: React.PropTypes.object.isRequired,
  children: React.PropTypes.node,
}

export default TeamLink
