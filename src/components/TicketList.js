import React, { PropTypes } from 'react'
import Ticket from 'components/Ticket'

const TicketList = ({
  tickets,
  onTicketClick
}) => (
  <ul>
    {tickets.map(ticket =>
      <Ticket
        key={ticket.id}
        {...ticket}
        onClick={() => onTicketClick(ticket.id)}
      />
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
