import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { UserTable } from 'components/users/UserList';
import { Gravatar } from 'components/misc';
import { UserLink } from 'components';

describe('UserTable Component', () => {
  const setup = propOverrides => {
    const props = Object.assign(
      {
        children: null,
      },
      propOverrides,
    );

    const wrapper = shallow(<UserTable {...props} />);

    return {
      props,
      wrapper,
      thead: wrapper.find('thead'),
      rows: wrapper.find('tr'),
    };
  };

  const fixtures = [
    {
      id: 0,
      username: 'user0',
      fullName: 'User 0',
      email: 'user0@users.com',
    },
    {
      id: 0,
      username: 'user1',
      fullName: 'User 1',
      email: 'user1@users.com',
    },
  ];

  it('displays keys in the header', () => {
    const { thead } = setup({ users: fixtures });

    const headers = thead.find('th');
    expect(headers.at(0)).to.contain.text('');
    expect(headers.at(1)).to.contain.text('Username');
    expect(headers.at(2)).to.contain.text('Full Name');
  });

  context('provided users', () => {
    it('renders a user row', () => {
      const { rows } = setup({ users: fixtures });

      const row = rows.at(1);
      const gravatar = row.find(Gravatar);
      const link = row.find(UserLink);
      expect(gravatar.exists()).to.be.true;
      expect(link.prop('user')).to.deep.eq(fixtures[0]);
      expect(link.prop('children')).to.eq(fixtures[0].username);
      expect(row).to.contain.text(fixtures[0].fullName);
    });
  });
});
