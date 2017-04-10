import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TeamList } from 'components'

storiesOf('TeamList', module)
  .add('renders', () => (
    <TeamList>Render</TeamList>
  ))
