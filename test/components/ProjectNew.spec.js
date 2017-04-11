import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import { wrapProvider } from '../utilities';
import Container, { ProjectNew } from 'components/projects/ProjectNew';
import { ProjectForm } from 'components';

describe('ProjectNew Component', () => {
  it('renders', () => {
    const Enhanced = wrapProvider()(Container);
    const wrapper = mount(<Enhanced />);

    const container = wrapper.find(Container);
    const component = wrapper.find(ProjectNew);

    expect(container.exists()).to.be.true;
    expect(component.exists()).to.be.true;
  });

  it('passes callback to ProjectForm child', () => {
    const callback = () => {};
    const wrapper = shallow(<ProjectNew createProject={callback} />);
    const form = wrapper.find(ProjectForm);
    expect(form.prop('handleSubmit')).to.eq(callback);
  });
});
