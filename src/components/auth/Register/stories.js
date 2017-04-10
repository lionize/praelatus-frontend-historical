import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { RegisterForm } from 'components'

storiesOf('RegisterForm', module)
  .add('renders', () => (
    <RegisterForm>Render</RegisterForm>
  ))
