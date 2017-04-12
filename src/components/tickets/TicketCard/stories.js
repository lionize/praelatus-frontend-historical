import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Provider from 'provider'
import { TicketCard } from 'components'

const ticket = {
  id: 0,
  key: 'TICKET-0',
  summary: 'Ticket Summary',
  description: 'Ticket Description'
}

storiesOf('TicketCard', module)
  .addDecorator(Provider)
  .add('renders', () => (
    <TicketCard ticket={ticket} />
  ))
