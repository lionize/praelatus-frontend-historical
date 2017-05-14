import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from 'components';

describe('Footer Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBe(true);
  });
});
