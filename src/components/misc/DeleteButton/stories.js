import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { DeleteButton } from 'components'

storiesOf('DeleteButton', module)
  .add('renders', () => (
    <DeleteButton handleSubmit={() => {}}>Render</DeleteButton>
  ))
