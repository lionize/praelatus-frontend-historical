import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Provider from 'provider';
import { TeamList } from 'components';

const store = {
  data: {
    teams: {
      names: ['TEAM-0'],
      byName: {
        'TEAM-0': {
          id: 0,
          name: 'Team 0',
        },
      },
    },
  },
};
storiesOf('TeamList', module)
  .addDecorator(story => Provider(story, store))
  .add('renders', () => <TeamList>Render</TeamList>);
