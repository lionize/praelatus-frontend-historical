import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Ticket from 'components/Ticket'

const TicketList = ({
  tickets,
}) => (
  <ul>
    {tickets.map(ticket =>
      <li key={ticket.id}>
        <Link 
          to={`tickets/${ticket.id}`}
        >{ticket.id}</Link>: {ticket.summary}
      </li>
    )}
  </ul>
)

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default TicketList
