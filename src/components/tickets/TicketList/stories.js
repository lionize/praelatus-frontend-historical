import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TicketList } from 'components'

storiesOf('TicketList', module)
  .add('renders', () => (
    <TicketList>Render</TicketList>
  ))
