import React from 'react'
import { Link } from 'react-router'

const UserLink = ({ id, children }) => (
  <Link to={`/users/${id}`}>
    {children}
  </Link>
)

export default UserLink
