import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProfileBox } from 'components'

storiesOf('ProfileBox', module)
  .add('renders', () => (
    <ProfileBox>Render</ProfileBox>
  ))
