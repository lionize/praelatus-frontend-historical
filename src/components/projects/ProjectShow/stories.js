import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProjectShow } from 'components'

storiesOf('ProjectShow', module)
  .add('renders', () => (
    <ProjectShow>Render</ProjectShow>
  ))
