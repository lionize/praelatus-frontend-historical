import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProjectEdit } from 'components'

storiesOf('Form', module)
  .add('renders', () => (
    <ProjectEdit>Render</ProjectEdit>
  ))
