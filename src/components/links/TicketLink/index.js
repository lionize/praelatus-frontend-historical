import React from 'react'
import { Link } from 'react-router'

const TicketLink = ({ ikey, children }) => (
  <Link to={`/tickets/${ikey}`}>
    {children}
  </Link>
)

export default TicketLink
