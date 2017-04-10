import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { FormGroup } from 'components'

storiesOf('FormGroup', module)
  .add('renders', () => (
    <FormGroup>Render</FormGroup>
  ))
