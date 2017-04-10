import React from 'react'
import { storiesOf } from '@kadira/storybook'
import NotFoundCard from './index'

storiesOf('ErrorCard', module)
  .add('renders', () => (
    <NotFoundCard handleSubmit={() => {}}>Render</NotFoundCard>
  ))
