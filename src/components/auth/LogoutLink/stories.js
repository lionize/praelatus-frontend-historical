import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { LogoutLink } from 'components'

storiesOf('LogoutLink', module)
  .add('renders', () => (
    <LogoutLink>Render</LogoutLink>
  ))
