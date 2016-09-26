import React, { PropTypes } from 'react'

const Ticket = ({
  onClick,
  summary,
  description
}) => (
  <li
    onClick={onClick}
  >
    {summary}
    {' '}
    {description}
  </li>
)

Ticket.propTypes = {
  onClick: PropTypes.func.isRequired,
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Ticket
