import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Flash from './index'

storiesOf('ErrorCard', module)
  .add('renders', () => (
    <Flash handleSubmit={() => {}}>Render</Flash>
  ))
