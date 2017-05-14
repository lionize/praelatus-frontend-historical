import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { wrapRouter, wrapProvider } from '../utilities';
import Container, { UserShow } from 'components/users/UserShow';

describe('UserShow Component', () => {
  it('renders', () => {
    const state = {
      data: {
        users: {
          usernames: ['USER'],
          byUsername: {
            USER: {
              username: 'USER',
              email: 'user@users.com',
            },
          },
        },
      },
    };
    const params = {
      username: 'USER',
    };

    let Enhanced = wrapProvider({ state })(Container);
    Enhanced = wrapRouter({ params })(Enhanced);

    const wrapper = mount(<Enhanced />);

    const container = wrapper.find(Container);
    const component = wrapper.find(UserShow);

    expect(container.exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it('calls load user action on mount', () => {
    const callback = sinon.spy();
    const wrapper = shallow(
      <UserShow loadUser={callback} user={{}} params={{ username: 'USER' }} />,
    );
    expect(callback.calledOnce).toBe(true);
  });
});
