import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { LoginLink } from 'components'

storiesOf('LoginLink', module)
  .add('renders', () => (
    <LoginLink>Render</LoginLink>
  ))
