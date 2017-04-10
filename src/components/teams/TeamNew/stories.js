import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TeamNew } from 'components'

storiesOf('TeamNew', module)
  .add('renders', () => (
    <TeamNew>Render</TeamNew>
  ))
