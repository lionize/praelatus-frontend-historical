import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Provider from 'provider'
import { TeamCard } from 'components'

const team = {
  id: 0,
  name: 'Team 0',
}

storiesOf('TeamCard', module)
  .addDecorator(Provider)
  .add('renders', () => (
    <TeamCard team={team} />
  ))
