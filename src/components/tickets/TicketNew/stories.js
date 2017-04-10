import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TicketNew } from 'components'

storiesOf('TicketNew', module)
  .add('renders', () => (
    <TicketNew>Render</TicketNew>
  ))
