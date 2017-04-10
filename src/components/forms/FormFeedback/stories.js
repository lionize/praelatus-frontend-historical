import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { FormFeedback } from 'components'

storiesOf('FormFeedback', module)
  .add('renders', () => (
    <FormFeedback>Render</FormFeedback>
  ))
