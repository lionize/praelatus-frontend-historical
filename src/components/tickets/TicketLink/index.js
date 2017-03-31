import React from 'react'
import { Link } from 'react-router'

const TicketLink = ({ ticket, children }) => (
  <Link to={`/tickets/${ticket.key}`}>
    {children}
  </Link>
)

TicketLink.propTypes = {
  ticket: React.PropTypes.object.isRequired,
  children: React.PropTypes.node,
}

export default TicketLink
