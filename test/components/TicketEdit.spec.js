import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import { wrapRouter, wrapProvider } from '../utilities';
import Container, { TicketEdit } from 'components/tickets/TicketEdit';
import { TicketForm } from 'components';

describe('TicketEdit Component', () => {
  const setup = propOverrides => {
    const props = Object.assign(
      {
        tickets: [],
        updateTicket: () => {},
        loadTicket: () => {},
      },
      propOverrides,
    );

    const wrapper = shallow(<TicketEdit {...props} />);

    return {
      props,
      wrapper,
    };
  };

  it('renders', () => {
    const state = {
      data: {
        tickets: {
          keys: ['TICKET1'],
          byKey: {
            TICKET1: {
              key: 'TICKET1',
            },
          },
        },
      },
    };
    const params = {
      key: 'TICKET1',
    };

    let Enhanced = wrapProvider({ state })(Container);
    Enhanced = wrapRouter({ params })(Enhanced);

    const wrapper = mount(<Enhanced />);

    const container = wrapper.find(Container);
    const component = wrapper.find(TicketEdit);

    expect(container.exists()).to.be.true;
    expect(component.exists()).to.be.true;
  });

  it('calls load ticket action on mount', () => {
    const callback = spy();
    const params = { key: 'TICKET1' };
    setup({ loadTicket: callback, params });
    expect(callback.calledOnce).to.be.true;
  });

  it('passes update callback to TicketForm child', () => {
    const callback = () => {};
    const params = { key: 'TICKET1' };
    const { wrapper } = setup({ updateTicket: callback, params });
    const form = wrapper.find(TicketForm);
    expect(form.prop('handleSubmit')).to.eq(callback);
  });
});
