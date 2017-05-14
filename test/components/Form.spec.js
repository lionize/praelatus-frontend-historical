import React from 'react';
import { shallow } from 'enzyme';
import { Form } from 'components';

describe('Form Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Form />, { context: {} });

    expect(wrapper.exists()).toBe(true);
  });
});
