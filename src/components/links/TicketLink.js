import React from 'react'
import { Link } from 'react-router'

const TicketLink = ({ id, children }) => (
  <Link to={`/tickets/${id}`}>
    {children}
  </Link>
)

export default TicketLink
