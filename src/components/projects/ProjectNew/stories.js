import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProjectNew } from 'components'

storiesOf('ProjectNew', module)
  .add('renders', () => (
    <ProjectNew>Render</ProjectNew>
  ))
