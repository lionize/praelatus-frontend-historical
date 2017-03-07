import React from 'react'
import { Link } from 'react-router'

const UserLink = ({ user, children }) => (
  <Link to={`/users/${user.username}`}>
    {children}
  </Link>
)

export default UserLink
