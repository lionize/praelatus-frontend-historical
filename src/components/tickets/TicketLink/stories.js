import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TicketLink } from 'components'

storiesOf('TicketLink', module)
  .add('renders', () => (
    <TicketLink>Render</TicketLink>
  ))
