import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { wrapProvider } from '../utilities';
import Container, {
  ProjectDeleteButton,
} from 'components/projects/ProjectDeleteButton';
import { DeleteButton } from 'components';

describe('ProjectDeleteButton Component', () => {
  it('renders', () => {
    const Enhanced = wrapProvider()(Container);
    const wrapper = mount(<Enhanced project={{}} />);

    const container = wrapper.find(Container);
    const component = wrapper.find(ProjectDeleteButton);

    expect(container.exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it('calls the delete project action', () => {
    const project = { key: 'PROJECT-TEST' };
    const callback = sinon.spy();
    const wrapper = mount(
      <ProjectDeleteButton project={project} deleteProject={callback} />,
    );

    wrapper.find(DeleteButton).simulate('click');
    expect(callback.called).toBe(true);
    expect(callback.calledWith(project.key)).toBe(true);
  });
});
