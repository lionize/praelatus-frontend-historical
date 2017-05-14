import React from 'react';
import { shallow } from 'enzyme';
import { CardTitle, CardText } from 'reactstrap';
import {
  ProjectCard,
  ErrorCard,
  NotFoundCard,
  LinkButton,
  ProjectDeleteButton,
  UserLink,
} from 'components';

describe('ProjectCard Component', () => {
  const setup = propOverrides => {
    const props = Object.assign(
      {
        children: null,
      },
      propOverrides,
    );

    const wrapper = shallow(<ProjectCard {...props} />);

    return {
      props,
      wrapper,
      title: wrapper.find(CardTitle),
      error: wrapper.find(ErrorCard),
      notFound: wrapper.find(NotFoundCard),
      text: wrapper.find(CardText),
      userLink: wrapper.find(UserLink),
    };
  };

  it('renders', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a loading message when loading', () => {
    const { wrapper } = setup({ loading: true });

    expect(wrapper.find('h1').text()).toContain('Loading...');
  });

  it('renders ErrorCard when error exists', () => {
    const { error } = setup({ error: 'Error' });

    expect(error.exists()).toBe(true);
  });

  it('renders NotFoundCard when no project found', () => {
    const { notFound } = setup();

    expect(notFound.exists()).toBe(true);
  });

  describe('when provided a project', () => {
    const project = {
      key: 'PROJECT-1',
      name: 'PROJECT 1',
      homepage: 'http://www.google.com/',
      lead: {
        username: 'user0',
      },
    };

    it("renders project's information", () => {
      const { wrapper, title, text } = setup({ project });

      expect(title.shallow().text()).toContain(project.name);
      expect(text.first().shallow().text()).toContain('key: PROJECT-1');
      expect(text.at(1).shallow().text()).toContain(
        'homepage: http://www.google.com/',
      );
    });

    it('renders project lead link', () => {
      const { userLink } = setup({ project });

      expect(userLink.prop('user')).toEqual(project.lead);
    });

    it('renders project edit link', () => {
      const { wrapper } = setup({ project });
      const button = wrapper.find(LinkButton);

      expect(button.prop('to')).toEqual('/projects/PROJECT-1/edit');
    });

    it('renders project delete link', () => {
      const { wrapper } = setup({ project });
      const button = wrapper.find(ProjectDeleteButton);

      expect(button.prop('project')).toEqual(project);
    });
  });
});
