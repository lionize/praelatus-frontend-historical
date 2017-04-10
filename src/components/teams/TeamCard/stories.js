import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TeamCard } from 'components'

storiesOf('TeamCard', module)
  .add('renders', () => (
    <TeamCard>Render</TeamCard>
  ))
