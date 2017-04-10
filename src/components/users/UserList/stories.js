import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { UserList } from 'components'

storiesOf('UserList', module)
  .add('renders', () => (
    <UserList>Render</UserList>
  ))
