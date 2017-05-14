import React from 'react';
import { shallow } from 'enzyme';
import { TeamTable } from 'components/teams/TeamList';
import { TeamLink, UserLink } from 'components';

describe('TeamTable Component', () => {
  const setup = propOverrides => {
    const props = Object.assign(
      {
        children: null,
      },
      propOverrides,
    );

    const wrapper = shallow(<TeamTable {...props} />);

    return {
      props,
      wrapper,
      rows: wrapper.find('tbody tr'),
      teamLink: wrapper.find('TeamLink'),
      userLink: wrapper.find('UserLink'),
    };
  };

  const fixtures = [
    {
      id: 0,
      name: 'Team With Lead',
      lead: {
        username: 'user0',
        id: 0,
      },
    },
    {
      id: 1,
      name: 'Team With Members',
      members: [
        { username: 'user0', id: 0 },
        { username: 'user1', id: 1 },
        { username: 'user2', id: 2 },
      ],
    },
    {
      id: 2,
      name: 'Team With None',
    },
  ];

  describe('team', () => {
    it("renders a row with team's information", () => {
      const { teamLink } = setup({ teams: [fixtures[0]] });

      expect(teamLink.prop('team')).toEqual(fixtures[0]);
      expect(teamLink.prop('children')).toEqual(fixtures[0].name);
    });
  });

  describe('lead', () => {
    it('renders a link to team lead', () => {
      const { userLink } = setup({ teams: [fixtures[0]] });

      expect(userLink.prop('user')).toEqual(fixtures[0].lead);
      expect(userLink.prop('children')).toEqual(fixtures[0].lead.username);
    });

    it('does not render lead link if lead does not exist', () => {
      const { userLink } = setup({ teams: [fixtures[2]] });

      expect(userLink.exists()).toBe(false);
    });
  });

  describe('members', () => {
    it('renders links to team members', () => {
      const { userLink } = setup({ teams: [fixtures[1]] });

      expect(userLink.length).toEqual(3);
      expect(userLink.at(0).prop('user')).toEqual(fixtures[1].members[0]);
      expect(userLink.at(0).prop('children')).toEqual(
        fixtures[1].members[0].username,
      );
    });

    it('does not render member links if members do not exist', () => {
      const { userLink } = setup({ teams: [fixtures[2]] });

      expect(userLink.exists()).toBe(false);
    });
  });
});
