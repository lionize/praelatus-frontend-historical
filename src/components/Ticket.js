import React, { PropTypes } from 'react'

const Ticket = ({
  id,
  summary,
  description
}) => (
  <div>
    <h1>
      <span>{summary}</span>
      <span>#{id}</span>
    </h1>
    <div className="description">
      {description}
    </div>
  </div>
)

Ticket.propTypes = {
  id: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Ticket
