import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TicketForm } from 'components'

storiesOf('TicketForm', module)
  .add('renders', () => (
    <TicketForm>Render</TicketForm>
  ))
