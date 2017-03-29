import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import actions from 'modules/ticket'
import { TicketForm } from 'components'

export const TicketNew = ({ createTicket }) => (
  <TicketForm handleSubmit={createTicket} />
)

export default connect(null,
  { createTicket: actions.createRequest }
)(TicketNew)
