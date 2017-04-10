import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProjectForm } from 'components'

storiesOf('ProjectForm', module)
  .add('renders', () => (
    <ProjectForm>Render</ProjectForm>
  ))
