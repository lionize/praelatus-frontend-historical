import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { ProjectForm } from 'components';

describe('ProjectForm component', () => {
  it('renders', () => {
    const wrapper = shallow(<ProjectForm />);

    expect(wrapper.exists()).toBe(true);
  });

  it('takes a callback', () => {
    const callback = () => {};
    const wrapper = shallow(<ProjectForm handleSubmit={callback} />);

    expect(wrapper.prop('handleSubmit')).toEqual(callback);
  });
});
