import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Provider from 'provider';
import { TicketForm } from 'components';

storiesOf('TicketForm', module)
  .addDecorator(Provider)
  .add('renders', () => <TicketForm />);
