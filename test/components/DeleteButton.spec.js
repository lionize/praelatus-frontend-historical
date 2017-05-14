import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { DeleteButton } from 'components';

describe('DeleteButton Component', () => {
  it('renders', () => {
    const wrapper = shallow(<DeleteButton handleClick={() => {}} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('handles click callback', () => {
    const callback = sinon.spy();
    const wrapper = shallow(<DeleteButton handleClick={callback} />);

    wrapper.simulate('click');

    expect(callback.called).toBe(true);
  });
});
