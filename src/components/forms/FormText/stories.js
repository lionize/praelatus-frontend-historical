import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { FormText } from 'components'

storiesOf('FormText', module)
  .add('renders', () => (
    <FormText>Render</FormText>
  ))
