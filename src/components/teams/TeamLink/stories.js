import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TeamLink } from 'components'

storiesOf('TeamLink', module)
  .add('renders', () => (
    <TeamLink>Render</TeamLink>
  ))
