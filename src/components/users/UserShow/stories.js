import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { UserShow } from 'components'

storiesOf('UserShow', module)
  .add('renders', () => (
    <UserShow>Render</UserShow>
  ))
