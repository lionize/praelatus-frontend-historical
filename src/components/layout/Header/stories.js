import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Provider from 'provider';
import { Header } from 'components';

const store = {
  auth: {
    currentUser: null,
  },
};

storiesOf('Header', module)
  .addDecorator(story => Provider(story, store))
  .add('renders', () => <Header>Render</Header>);
