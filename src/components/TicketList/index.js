import React, { PropTypes } from 'react'

import styles from './ticketList.css'

const TicketList = ({ tickets }) => (
  <div className={styles.container}>
    {tickets.map(ticket =>
      <div
        key={ticket.id}
        className={styles.ticket}
      >
        #{ticket.id}
        <p>{ticket.summary}</p>
      </div>
    )}
  </div>
)
TicketList.propTypes = {
  tickets: PropTypes.object.isRequired,
}

export default TicketList
