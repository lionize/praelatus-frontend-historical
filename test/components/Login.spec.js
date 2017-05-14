import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import { wrapProvider } from '../utilities';
import Login, { Form as LoginForm } from 'components/auth/Login';
import { Form } from 'components';

describe('Login Component', () => {
  it('renders', () => {
    const Enhanced = wrapProvider()(Login);
    const wrapper = mount(<Enhanced />);

    const container = wrapper.find(Login);
    const component = wrapper.find(LoginForm);

    expect(container.exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it('performs login', () => {
    const callback = sinon.spy();

    const wrapper = shallow(<LoginForm handleSubmit={callback} />);
    wrapper.find(Form).simulate('submit');
    expect(callback.called).toBe(true);
  });
});
