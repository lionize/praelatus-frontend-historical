import React from 'react'
import { connect } from 'react-redux'
import actions from 'modules/ticket'
import { DeleteButton } from 'components'

const TicketDeleteButton = ({ ticket, deleteTicket }) => (
  <DeleteButton handleClick={() => { deleteTicket(ticket.key) }} />
)

export { TicketDeleteButton }

export default connect(null,
  { deleteTicket: actions.deleteRequest },
)(TicketDeleteButton)
