import React from 'react';
import { mount, shallow } from 'enzyme';
import { wrapProvider } from '../utilities';
import Container, { TeamNew } from 'components/teams/TeamNew';
import { TeamForm } from 'components';

describe('TeamNew Component', () => {
  it('renders', () => {
    const Enhanced = wrapProvider()(Container);
    const wrapper = mount(<Enhanced />);

    const container = wrapper.find(Container);
    const component = wrapper.find(TeamNew);

    expect(container.exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it('passes create callback to TeamForm child', () => {
    const callback = () => {};
    const wrapper = shallow(<TeamNew createTeam={callback} />);
    const form = wrapper.find(TeamForm);
    expect(form.prop('handleSubmit')).toEqual(callback);
  });
});
