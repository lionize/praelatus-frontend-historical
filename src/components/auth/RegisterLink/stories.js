import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { RegisterLink } from 'components'

storiesOf('RegisterLink', module)
  .add('renders', () => (
    <RegisterLink>Render</RegisterLink>
  ))
