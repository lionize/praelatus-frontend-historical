import React from 'react';
import { shallow } from 'enzyme';
import { LoginLink } from 'components';

describe('LoginLink', () => {
  it('renders', () => {
    const wrapper = shallow(<LoginLink />);

    expect(wrapper.exists()).toBe(true);
  });
});
