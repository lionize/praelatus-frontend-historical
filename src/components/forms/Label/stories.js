import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Label } from 'components'

storiesOf('Label', module)
  .add('renders', () => (
    <Label>Render</Label>
  ))
