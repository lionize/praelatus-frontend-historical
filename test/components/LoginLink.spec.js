import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { LoginLink } from 'components';

describe('LoginLink', () => {
  it('renders', () => {
    const wrapper = shallow(<LoginLink />);

    expect(wrapper.exists()).to.be.true;
  });
});
