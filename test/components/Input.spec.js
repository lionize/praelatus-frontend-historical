import React from 'react';
import { shallow } from 'enzyme';
import { Input } from 'components';

describe('Input Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Input />, { context: {} });

    expect(wrapper.exists()).toBe(true);
  });
});
