import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Provider from 'provider';
import { ProjectCard } from 'components';

const project = {
  id: 0,
  key: 'PROJECT-0',
  name: 'Project 0',
  homepage: 'https://project0.io/',
  repo: 'https://github.com/praelatus/project0',
};

storiesOf('ProjectCard', module)
  .addDecorator(Provider)
  .add('renders', () => <ProjectCard project={project} />);
