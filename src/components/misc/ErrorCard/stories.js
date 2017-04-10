import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ErrorCard } from 'components'

storiesOf('ErrorCard', module)
  .add('renders', () => (
    <ErrorCard handleSubmit={() => {}}>Render</ErrorCard>
  ))
