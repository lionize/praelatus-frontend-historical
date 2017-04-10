import React from 'react'
import { storiesOf } from '@kadira/storybook'
import LogoutLink from './index'

storiesOf('LogoutLink', module)
  .add('renders', () => (
    <LogoutLink>Render</LogoutLink>
  ))
