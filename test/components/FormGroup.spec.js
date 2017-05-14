import React from 'react';
import { shallow } from 'enzyme';
import { FormGroup } from 'components';

describe('FormGroup Component', () => {
  it('renders', () => {
    const wrapper = shallow(<FormGroup />);

    expect(wrapper.exists()).toBe(true);
  });
});
