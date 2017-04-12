import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { UserCard } from 'components'

const user = {
  id: 0,
  username: 'user',
  email: 'user@users.com',
  fullName: 'User'
}

storiesOf('UserCard', module)
  .add('renders', () => (
    <UserCard user={user} />
  ))
