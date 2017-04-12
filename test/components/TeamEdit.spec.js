import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import { wrapRouter, wrapProvider } from '../utilities';
import Container, { TeamEdit } from 'components/teams/TeamEdit';
import { TeamForm } from 'components';

describe('TeamEdit Component', () => {
  const setup = propOverrides => {
    const props = Object.assign(
      {
        teams: [],
        loadTeam: () => {},
        updateTeam: () => {},
      },
      propOverrides,
    );

    const wrapper = shallow(<TeamEdit {...props} />);

    return {
      props,
      wrapper,
    };
  };

  it('renders', () => {
    const state = {
      data: {
        teams: {
          names: ['TEAM1'],
          byName: {
            TEAM1: {
              name: 'TEAM1',
            },
          },
        },
      },
    };
    const params = {
      name: 'TEAM1',
    };

    let Enhanced = wrapProvider({ state })(Container);
    Enhanced = wrapRouter({ params })(Enhanced);

    const wrapper = mount(<Enhanced />);

    const container = wrapper.find(Container);
    const component = wrapper.find(TeamEdit);

    expect(container.exists()).to.be.true;
    expect(component.exists()).to.be.true;
  });

  it('calls load team action on mount', () => {
    const callback = spy();
    const params = { name: 'TEAM1' };
    const { wrapper } = setup({ loadTeam: callback, params });
    expect(callback.calledOnce).to.be.true;
  });

  it('passes update callback to TeamForm child', () => {
    const callback = () => {};
    const params = { name: 'TEAM1' };
    const { wrapper } = setup({ updateTeam: callback, params });
    const form = wrapper.find(TeamForm);
    expect(form.prop('handleSubmit')).to.eq(callback);
  });
});
