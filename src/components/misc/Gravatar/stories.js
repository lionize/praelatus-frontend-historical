import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Gravatar from './index'

storiesOf('ErrorCard', module)
  .add('renders', () => (
    <Gravatar handleSubmit={() => {}}>Render</Gravatar>
  ))
