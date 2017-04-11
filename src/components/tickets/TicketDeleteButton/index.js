import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from 'modules/ticket'
import { DeleteButton } from 'components'

const TicketDeleteButton = ({ ticket, deleteTicket }) => (
  <DeleteButton handleClick={() => { deleteTicket(ticket.key) }} />
)

TicketDeleteButton.propTypes = {
  ticket: PropTypes.object.isRequired,
  deleteTicket: PropTypes.func.isRequired,
}

export { TicketDeleteButton }

export default connect(null,
  { deleteTicket: actions.deleteRequest },
)(TicketDeleteButton)
