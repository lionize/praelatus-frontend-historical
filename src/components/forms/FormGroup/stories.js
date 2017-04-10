import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FormGroup from './index'

storiesOf('FormGroup', module)
  .add('renders', () => (
    <FormGroup>Render</FormGroup>
  ))
