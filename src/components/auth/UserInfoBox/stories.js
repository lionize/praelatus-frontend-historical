import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { UserInfoBox } from './index'

storiesOf('UserInfoBox', module)
  .add('renders', () => (
    <UserInfoBox>Render</UserInfoBox>
  ))
