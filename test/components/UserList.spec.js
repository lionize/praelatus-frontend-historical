import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { wrapProvider, wrapRouter } from '../utilities';
import Container, { UserList, UserTable } from 'components/users/UserList';

describe('UserList Component', () => {
  const state = {
    data: {
      users: {
        usernames: ['USER1'],
        byUsername: {
          USER1: {
            id: 1,
            username: 'USER1',
            email: 'user1@users.com',
          },
        },
      },
    },
  };
  const params = {
    username: 'USER1',
  };

  const setup = propOverrides => {
    const props = Object.assign(
      {
        params,
        users: [],
        loadUsers: () => {},
      },
      propOverrides,
    );

    const wrapper = shallow(<UserList {...props} />);

    return {
      wrapper,
      props,
    };
  };

  it('renders', () => {
    let Enhanced = wrapProvider({ state })(Container);
    Enhanced = wrapRouter({ params })(Enhanced);

    const props = { loadUser: () => {} };
    const wrapper = mount(<Enhanced {...props} />);

    const container = wrapper.find(Container);
    const component = wrapper.find(UserTable);

    expect(container.exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it('calls load users action on mount', () => {
    const callback = sinon.spy();
    const { wrapper } = setup({ loadUsers: callback });
    expect(callback.calledOnce).toBe(true);
  });

  it('passes users to table component', () => {
    const users = [{ username: 'USER1' }, { username: 'USER2' }];
    const { wrapper } = setup({ users });
    const table = wrapper.find(UserTable);

    expect(table.prop('users')).toEqual(users);
  });
});
