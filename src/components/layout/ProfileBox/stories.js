import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Provider from 'provider'
import { ProfileBox } from 'components'

storiesOf('ProfileBox', module)
  .addDecorator(Provider)
  .add('renders', () => (
    <ProfileBox user={{ username: 'mark' }} />
  ))
