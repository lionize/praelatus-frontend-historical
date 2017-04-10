import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TicketEdit } from 'components'

storiesOf('TicketEdit', module)
  .add('renders', () => (
    <TicketEdit>Render</TicketEdit>
  ))
