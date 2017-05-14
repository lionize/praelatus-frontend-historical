import React from 'react';
import { shallow } from 'enzyme';
import { ProjectLink } from 'components';

describe('ProjectLink Component', () => {
  it('renders', () => {
    const project = {};
    const wrapper = shallow(<ProjectLink project={project} children={null} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('has props for href and children', () => {
    const project = {
      key: 'PROJECT-1',
    };
    const wrapper = shallow(
      <ProjectLink project={project} children={<div />} />,
    );
    const { to, children } = wrapper.props();

    expect(to).toEqual('/projects/PROJECT-1');
    expect(children).toEqual(<div />);
  });
});
