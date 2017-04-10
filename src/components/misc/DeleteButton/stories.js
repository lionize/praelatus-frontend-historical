import React from 'react'
import { storiesOf } from '@kadira/storybook'
import DeleteButton from './index'

storiesOf('DeleteButton', module)
  .add('renders', () => (
    <DeleteButton handleSubmit={() => {}}>Render</DeleteButton>
  ))
