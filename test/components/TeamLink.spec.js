import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { TeamLink } from 'components';

describe('TeamLink Component', () => {
  it('renders', () => {
    const team = {};
    const wrapper = shallow(<TeamLink team={team} children={null} />);

    expect(wrapper.exists()).to.be.true;
  });
});
