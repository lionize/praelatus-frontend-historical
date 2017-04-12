import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Provider from 'provider';
import { ProjectList } from 'components';

const store = {
  data: {
    projects: {
      keys: ['PROJECT-1'],
      byKey: {
        'PROJECT-1': {
          id: 0,
          key: 'PROJECT-1',
          name: 'PROJECT 1',
          homepage: 'http://project1.io',
        },
      },
    },
  },
};

storiesOf('ProjectList', module)
  .addDecorator(story => Provider(story, store))
  .add('renders', () => <ProjectList>Render</ProjectList>);
