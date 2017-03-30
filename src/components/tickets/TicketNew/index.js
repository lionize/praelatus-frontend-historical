import React from 'react'
import { connect } from 'react-redux'
import actions from 'modules/ticket'
import { TicketForm } from 'components'

export const TicketNew = ({ createTicket }) => (
  <TicketForm handleSubmit={createTicket} />
)

export default connect(null,
  { createTicket: actions.createRequest }
)(TicketNew)
