import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Ticket = ({
  id,
  summary,
  description
}) => (
  <li>
    <Link to={`tickets/${id}`}>{id}</Link>: {summary}
  </li>
)

Ticket.propTypes = {
  id: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Ticket
