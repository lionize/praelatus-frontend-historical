import React from 'react';
import { shallow } from 'enzyme';
import { TicketLink } from 'components';

describe('TicketLink Component', () => {
  it('renders', () => {
    const ticket = {};
    const wrapper = shallow(<TicketLink ticket={ticket} children={null} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('has props for href and children', () => {
    const ticket = {
      key: 'TICKET-1',
    };
    const wrapper = shallow(<TicketLink ticket={ticket} children={<div />} />);
    const { to, children } = wrapper.props();

    expect(to).toEqual('/tickets/TICKET-1');
    expect(children).toEqual(<div />);
  });
});
