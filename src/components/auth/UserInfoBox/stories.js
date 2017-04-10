import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { UserInfoBox } from 'components'

storiesOf('UserInfoBox', module)
  .add('renders', () => (
    <UserInfoBox>Render</UserInfoBox>
  ))
