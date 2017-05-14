import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'components';

describe('Button Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Button children={[]} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders with passed props', () => {
    const props = {
      children: <div />,
      color: 'red',
    };
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper.prop('children')).toEqual(<div />);
    expect(wrapper.prop('color')).toEqual('red');
  });
});
