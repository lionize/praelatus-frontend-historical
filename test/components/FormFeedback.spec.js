import React from 'react';
import { shallow } from 'enzyme';
import { FormFeedback } from 'components';

describe('FormFeedback Component', () => {
  it('renders', () => {
    const wrapper = shallow(<FormFeedback />, { context: {} });

    expect(wrapper.exists()).toBe(true);
  });
});
