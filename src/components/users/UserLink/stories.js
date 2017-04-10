import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { UserLink } from 'components'

storiesOf('UserLink', module)
  .add('renders', () => (
    <UserLink>Render</UserLink>
  ))
