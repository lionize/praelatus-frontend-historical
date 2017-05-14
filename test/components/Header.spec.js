import React from 'react';
import { shallow } from 'enzyme';
import { Header } from 'components';

describe('Header Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBe(true);
  });
});
