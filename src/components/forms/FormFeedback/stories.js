import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FormFeedback from './index'

storiesOf('FormFeedback', module)
  .add('renders', () => (
    <FormFeedback>Render</FormFeedback>
  ))
