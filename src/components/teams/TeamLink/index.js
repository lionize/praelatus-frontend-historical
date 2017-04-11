import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router'

const TeamLink = ({ team, children }) => (
  <Link to={`/teams/${team.name}`}>
    {children}
  </Link>
)

TeamLink.propTypes = {
  team: PropTypes.object.isRequired,
  children: PropTypes.node,
}

TeamLink.defaultProps = {
  children: [],
}

export default TeamLink
