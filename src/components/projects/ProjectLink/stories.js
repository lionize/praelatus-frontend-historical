import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProjectLink } from 'components'

storiesOf('ProjectLink', module)
  .add('renders', () => (
    <ProjectLink>Render</ProjectLink>
  ))
