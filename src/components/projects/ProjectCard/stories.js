import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProjectCard } from 'components'

storiesOf('ProjectCard', module)
  .add('renders', () => (
    <ProjectCard>Render</ProjectCard>
  ))
