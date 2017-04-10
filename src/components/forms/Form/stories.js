import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Form from './index'

storiesOf('Form', module)
  .add('renders', () => (
    <Form>Render</Form>
  ))
