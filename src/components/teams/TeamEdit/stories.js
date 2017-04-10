import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TeamEdit } from 'components'

storiesOf('TeamEdit', module)
  .add('renders', () => (
    <TeamEdit>Render</TeamEdit>
  ))
