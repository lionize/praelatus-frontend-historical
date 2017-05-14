import React from 'react';
import { shallow } from 'enzyme';
import { RegisterLink } from 'components';

describe('RegisterLink', () => {
  it('renders', () => {
    const wrapper = shallow(<RegisterLink />);

    expect(wrapper.exists()).toBe(true);
  });
});
