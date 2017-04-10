import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FormText from './index'

storiesOf('FormText', module)
  .add('renders', () => (
    <FormText>Render</FormText>
  ))
