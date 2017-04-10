import React from 'react'
import { storiesOf } from '@kadira/storybook'
import LoginForm from './index'

storiesOf('LoginForm', module)
  .add('renders', () => (
    <LoginForm>Render</LoginForm>
  ))