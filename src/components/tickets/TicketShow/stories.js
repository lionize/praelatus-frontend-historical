import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TicketShow } from 'components'

storiesOf('TicketShow', module)
  .add('renders', () => (
    <TicketShow>Render</TicketShow>
  ))
