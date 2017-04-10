import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Gravatar } from 'components'

storiesOf('ErrorCard', module)
  .add('renders', () => (
    <Gravatar handleSubmit={() => {}}>Render</Gravatar>
  ))
