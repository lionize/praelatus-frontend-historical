import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import { wrapProvider } from '../utilities';
import Register, { Form as RegisterForm } from 'components/auth/Register';
import { Form } from 'components';

describe('Register Component', () => {
  it('renders', () => {
    const state = {
      auth: {
        error: null,
        loading: false,
      },
    };

    const Enhanced = wrapProvider({ state })(Register);
    const wrapper = mount(<Enhanced />);

    const container = wrapper.find(Register);
    const component = wrapper.find(RegisterForm);

    expect(container.exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it('performs register', () => {
    const callback = sinon.spy();

    const wrapper = shallow(<RegisterForm handleSubmit={callback} />);
    wrapper.find(Form).simulate('submit');
    expect(callback.called).toBe(true);
  });
});
