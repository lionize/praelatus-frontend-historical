import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProjectDeleteButton } from 'components'

storiesOf('ProjectDeleteButton', module)
  .add('renders', () => (
    <ProjectDeleteButton>Render</ProjectDeleteButton>
  ))
