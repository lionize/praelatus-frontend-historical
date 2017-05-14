import React from 'react';
import { shallow } from 'enzyme';
import { FormText } from 'components';

describe('FormText Component', () => {
  it('renders', () => {
    const wrapper = shallow(<FormText />);

    expect(wrapper.exists()).toBe(true);
  });
});
