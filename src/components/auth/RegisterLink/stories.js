import React from 'react'
import { storiesOf } from '@kadira/storybook'
import RegisterLink from './index'

storiesOf('RegisterLink', module)
  .add('renders', () => (
    <RegisterLink>Render</RegisterLink>
  ))
