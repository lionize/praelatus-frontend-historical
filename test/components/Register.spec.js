import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import { wrapProvider } from '../utilities';
import Register, { RegisterForm } from 'components/auth/Register';
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

    expect(container.exists()).to.be.true;
    expect(component.exists()).to.be.true;
  });

  it('performs register', () => {
    const callback = sinon.spy();

    const wrapper = shallow(<RegisterForm handleSubmit={callback} />);
    wrapper.find(Form).simulate('submit');
    expect(callback.called).to.be.true;
  });
});
