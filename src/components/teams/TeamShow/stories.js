import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TeamShow } from 'components'

storiesOf('TeamShow', module)
  .add('renders', () => (
    <TeamShow>Render</TeamShow>
  ))
