import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Provider from 'provider'
import { ConnectedForm as Form } from './index'

storiesOf('RegisterForm', module)
  .addDecorator(Provider)
  .add('renders', () => (
    <Form />
  ))
