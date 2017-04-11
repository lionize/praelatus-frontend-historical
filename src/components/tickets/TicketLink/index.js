import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router'

const TicketLink = ({ ticket, children }) => (
  <Link to={`/tickets/${ticket.key}`}>
    {children}
  </Link>
)

TicketLink.propTypes = {
  ticket: PropTypes.object.isRequired,
  children: PropTypes.node,
}

TicketLink.defaultProps = {
  children: [],
}

export default TicketLink
