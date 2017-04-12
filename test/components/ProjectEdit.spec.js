import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import { wrapRouter, wrapProvider } from '../utilities';
import Container, { ProjectEdit } from 'components/projects/ProjectEdit';
import { ProjectForm } from 'components';

describe('ProjectEdit Component', () => {
  const setup = propOverrides => {
    const props = Object.assign(
      {
        projects: [],
        loadProject: () => {},
        updateProject: () => {},
      },
      propOverrides,
    );

    const wrapper = shallow(<ProjectEdit {...props} />);

    return {
      props,
      wrapper,
    };
  };

  it('renders', () => {
    const state = {
      data: {
        projects: {
          keys: ['PROJECT-TEST'],
          byKey: {
            'PROJECT-TEST': {
              key: 'PROJECT-TEST',
            },
          },
        },
      },
    };
    const params = {
      key: 'PROJECT-TEST',
    };

    let Enhanced = wrapProvider({ state })(Container);
    Enhanced = wrapRouter({ params })(Enhanced);

    const wrapper = mount(<Enhanced />);

    const container = wrapper.find(Container);
    const component = wrapper.find(ProjectEdit);

    expect(container.exists()).to.be.true;
    expect(component.exists()).to.be.true;
  });

  it('calls load project action on mount', () => {
    const callback = spy();
    const params = { key: 'PROJECT-1' };
    const { wrapper } = setup({ loadProject: callback, params });
    expect(callback.calledOnce).to.be.true;
  });

  it('passes callback to ProjectForm child', () => {
    const callback = () => {};
    const params = { key: 'PROJECT-1' };
    const { wrapper } = setup({ updateProject: callback, params });
    const form = wrapper.find(ProjectForm);
    expect(form.prop('handleSubmit')).to.eq(callback);
  });
});
