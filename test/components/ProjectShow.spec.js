import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { wrapRouter, wrapProvider } from '../utilities';
import Container, { ProjectShow } from 'components/projects/ProjectShow';

describe('ProjectShow Component', () => {
  it('renders', () => {
    const state = {
      data: {
        projects: {
          keys: ['PROJECT-TEST'],
          byKey: {
            'PROJECT-TEST': {
              id: 0,
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
    const component = wrapper.find(ProjectShow);

    expect(container.exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it('calls load project action on mount', () => {
    const callback = sinon.spy();
    const wrapper = shallow(
      <ProjectShow
        loadProject={callback}
        project={{ id: 0 }}
        params={{ key: 'PROJECT-1' }}
      />,
    );
    expect(callback.calledOnce).toBe(true);
  });

  it('calls load project action on update', () => {
    const callback = sinon.spy();
    const wrapper = shallow(
      <ProjectShow
        loadProject={callback}
        project={{ id: 0 }}
        params={{ key: 'PROJECT-1' }}
      />,
    );
    callback.reset();
    wrapper.instance().componentDidUpdate({ params: { key: 'PROJECT-2' } });
    expect(callback.calledOnce).toBe(true);
  });
});
