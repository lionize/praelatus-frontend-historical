import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { FormText } from 'components';

describe('FormText Component', () => {
  it('renders', () => {
    const wrapper = shallow(<FormText />);

    expect(wrapper.exists()).to.be.true;
  });
});
