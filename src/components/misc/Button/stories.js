import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Button from './index'

storiesOf('Button', module)
  .add('renders', () => (
    <Button>Render</Button>
  ))
