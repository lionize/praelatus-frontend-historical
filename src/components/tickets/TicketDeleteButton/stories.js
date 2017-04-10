import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TicketDeleteButton } from 'components'

storiesOf('TicketDeleteButton', module)
  .add('renders', () => (
    <TicketDeleteButton>Render</TicketDeleteButton>
  ))
