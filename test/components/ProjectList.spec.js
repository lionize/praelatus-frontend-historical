import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { wrapProvider } from '../utilities';
import Container, {
  ProjectList,
  ProjectTable,
} from 'components/projects/ProjectList';

describe('ProjectList Component', () => {
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

  const setup = propOverrides => {
    const props = Object.assign(
      {
        projects: [],
        loadProjects: () => {},
      },
      propOverrides,
    );

    const wrapper = shallow(<ProjectList {...props} />);

    return {
      props,
      wrapper,
    };
  };

  it('renders', () => {
    const Enhanced = wrapProvider({ state })(Container);
    const wrapper = mount(<Enhanced />);

    const container = wrapper.find(Container);
    const component = wrapper.find(ProjectTable);

    expect(container.exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it('calls load projects action on mount', () => {
    const callback = sinon.spy();
    const { wrapper } = setup({ loadProjects: callback });
    expect(callback.calledOnce).toBe(true);
  });

  it('passes projects to table component', () => {
    const projects = [
      { key: 'PROJECT-1', id: 0 },
      { key: 'PROJECT-2', id: 1 },
      { key: 'PROJECT-3', id: 2 },
    ];
    const { wrapper } = setup({ projects });
    const table = wrapper.find(ProjectTable);

    expect(table.prop('projects')).toEqual(projects);
  });
});
