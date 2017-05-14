import React from 'react';
import { shallow } from 'enzyme';
import { ProfileBox, LogoutLink } from 'components';

describe('ProfileBox Component', () => {
  it('renders', () => {
    const wrapper = shallow(<ProfileBox user={{}} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('shows the logged in user', () => {
    const wrapper = shallow(<ProfileBox user={{ username: 'testuser' }} />);

    expect(wrapper.text()).toContain('Logged in as: testuser');
  });

  it('shows a LogoutLink', () => {
    const wrapper = shallow(<ProfileBox user={{}} />);

    expect(wrapper.find(LogoutLink).exists()).toBe(true);
  });
});
