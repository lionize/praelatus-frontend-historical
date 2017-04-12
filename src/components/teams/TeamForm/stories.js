import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Provider from 'provider'
import { TeamForm } from 'components'

storiesOf('TeamForm', module)
  .addDecorator(Provider)
  .add('renders', () => (
    <TeamForm />
  ))
