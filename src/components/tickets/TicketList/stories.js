import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Provider from 'provider'
import { TicketList } from 'components'

const store = {
  data: {
    tickets: {
      keys: ['TICKET-0'],
      byKey: {
        'TICKET-0': {
          id: 0,
          key: 'TICKET-0',
          summary: 'Ticket Summary',
          description: 'Ticket Description'
        }
      }
    }
  }
}

storiesOf('TicketList', module)
  .addDecorator(story => (
    Provider(story, store)
  ))
  .add('renders', () => (
    <TicketList>Render</TicketList>
  ))
