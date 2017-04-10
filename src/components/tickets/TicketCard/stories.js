import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TicketCard } from 'components'

storiesOf('TicketCard', module)
  .add('renders', () => (
    <TicketCard>Render</TicketCard>
  ))
