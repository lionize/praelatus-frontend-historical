import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TeamForm } from 'components'

storiesOf('TeamForm', module)
  .add('renders', () => (
    <TeamForm>Render</TeamForm>
  ))
