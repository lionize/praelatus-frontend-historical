import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Form } from 'components'

storiesOf('Form', module)
  .add('renders', () => (
    <Form>Render</Form>
  ))
