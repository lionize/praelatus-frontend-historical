import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Provider from 'provider';
import { ConnectedForm as Form } from './index';

storiesOf('LoginForm', module)
  .addDecorator(Provider)
  .add('renders', () => <Form onSubmit={action('submit')} />);
