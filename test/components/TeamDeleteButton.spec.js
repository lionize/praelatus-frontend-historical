import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { wrapProvider } from '../utilities';
import Container, { TeamDeleteButton } from 'components/teams/TeamDeleteButton';
import { DeleteButton } from 'components';

describe('TeamDeleteButton Component', () => {
  it('renders', () => {
    const Enhanced = wrapProvider()(Container);
    const wrapper = mount(<Enhanced team={{}} />);

    const container = wrapper.find(Container);
    const component = wrapper.find(TeamDeleteButton);

    expect(container.exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it('calls the delete team action', () => {
    const team = { name: 'TEAM' };
    const callback = sinon.spy();
    const wrapper = mount(
      <TeamDeleteButton team={team} deleteTeam={callback} />,
    );

    wrapper.find(DeleteButton).simulate('click');
    expect(callback.called).toBe(true);
    expect(callback.calledWith(team.name)).toBe(true);
  });
});
