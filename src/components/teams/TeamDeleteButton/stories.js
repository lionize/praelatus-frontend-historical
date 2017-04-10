import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TeamDeleteButton } from 'components'

storiesOf('TeamDeleteButton', module)
  .add('renders', () => (
    <TeamDeleteButton>Render</TeamDeleteButton>
  ))
