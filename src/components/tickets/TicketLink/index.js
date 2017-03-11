import React from 'react'
import { Link } from 'react-router'

const TicketLink = ({ ticket, children }) => (
  <Link to={`/tickets/${ticket.key}`}>
    {children}
  </Link>
)

export default TicketLink
