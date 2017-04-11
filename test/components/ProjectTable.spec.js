import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { ProjectTable } from 'components/projects/ProjectList';
import { ProjectLink, UserLink } from 'components';

describe('ProjectTable', () => {
  const setup = propOverrides => {
    const props = Object.assign(
      {
        children: null,
      },
      propOverrides,
    );

    const wrapper = shallow(<ProjectTable {...props} />);

    return {
      props,
      wrapper,
      thead: wrapper.find('thead'),
      rows: wrapper.find('tr'),
      userLink: wrapper.find(UserLink),
    };
  };

  const fixture = {
    id: 0,
    name: 'Project 1',
    key: 'PROJECT-1',
    lead: {
      id: 0,
      username: 'user0',
      fullName: 'User 0',
    },
    createdDate: 'Today',
    homepage: 'http://www.google.com/',
    repo: 'bestrepo',
  };

  it('renders a project row', () => {
    const { rows } = setup({ projects: [fixture] });

    const row = rows.at(1);
    const links = row.find(ProjectLink);

    expect(links.at(0).prop('project')).to.eq(fixture);
    expect(links.at(0).prop('children')).to.eq(fixture.name);
    expect(links.at(1).prop('project')).to.eq(fixture);
    expect(links.at(1).prop('children')).to.eq(fixture.key);
    expect(row.text()).to.contain(fixture.createdDate);
    expect(row.text()).to.contain(fixture.homepage);
    expect(row.text()).to.contain(fixture.repo);
  });

  it("renders a link to the project's lead", () => {
    const { userLink } = setup({ projects: [fixture] });

    expect(userLink.prop('user')).to.eq(fixture.lead);
  });
});
