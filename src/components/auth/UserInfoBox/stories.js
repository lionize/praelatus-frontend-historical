import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Provider from 'provider';
import { UserInfoBox } from 'components';

const store = {
  auth: {
    currentUser: {
      username: 'mark',
    },
  },
};

storiesOf('UserInfoBox', module)
  .addDecorator(story => Provider(story, store))
  .add('renders', () => <UserInfoBox>Render</UserInfoBox>);
