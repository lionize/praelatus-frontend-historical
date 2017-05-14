import React from 'react';
import { shallow } from 'enzyme';
import { Flash } from 'components';

describe('Flash Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Flash message={''} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('can take an object', () => {
    const wrapper = shallow(
      <Flash message={{ data: { message: 'Message' } }} />,
    );

    expect(wrapper.text()).toContain('Message');
  });

  it('can take a string', () => {
    const wrapper = shallow(<Flash message={'Message'} />);

    expect(wrapper.text()).toContain('Message');
  });
});
