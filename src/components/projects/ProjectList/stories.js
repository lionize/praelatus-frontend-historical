import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProjectList } from 'components'

storiesOf('ProjectList', module)
  .add('renders', () => (
    <ProjectList>Render</ProjectList>
  ))
