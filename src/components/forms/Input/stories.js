import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Input from './index'

storiesOf('Input', module)
  .add('renders', () => (
    <Input>Render</Input>
  ))
