import React from 'react'
import { Link } from 'react-router'

const UserLink = ({ username, children }) => (
  <Link to={`/users/${username}`}>
    {children}
  </Link>
)

export default UserLink
