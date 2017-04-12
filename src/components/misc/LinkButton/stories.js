import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { LinkButton } from 'components';

storiesOf('ErrorCard', module).add('renders', () => (
  <LinkButton handleSubmit={() => {}}>Render</LinkButton>
));
