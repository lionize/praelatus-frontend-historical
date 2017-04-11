import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Provider from 'provider'
import { ProjectForm } from 'components'

storiesOf('ProjectForm', module)
  .addDecorator(Provider)
  .add('renders', () => (
    <ProjectForm />
  ))
