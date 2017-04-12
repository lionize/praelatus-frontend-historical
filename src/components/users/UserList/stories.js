import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Provider from 'provider'
import { UserList } from 'components'

const store = {
  data: {
    users: {
      usernames: ['user0'],
      byUsername: {
        user0: {
          id: 0,
          username: 'User 0',
          fullName: 'User Zero',
          email: 'user0@users.com'
        }
      }
    }
  }
}

storiesOf('UserList', module)
  .addDecorator(story => (
    Provider(story, store)
  ))
  .add('renders', () => (
    <UserList>Render</UserList>
  ))
