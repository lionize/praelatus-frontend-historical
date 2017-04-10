import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { UserCard } from 'components'

storiesOf('UserCard', module)
  .add('renders', () => (
    <UserCard>Render</UserCard>
  ))
