import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import TicketListItem from 'components/TicketListItem'

const TicketList = ({
  tickets,
}) => (
  <ul>
    {tickets.map(ticket =>
      <TicketListItem 
        key={ticket.id}
        {...ticket} 
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
