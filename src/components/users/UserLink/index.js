import React from 'react'
import { Link } from 'react-router'

const UserLink = ({ user, children }) => (
  <Link to={`/users/${user.username}`}>
    {children}
  </Link>
)

UserLink.propTypes = {
  user: React.PropTypes.object.isRequired,
  children: React.PropTypes.node,
}

export default UserLink
