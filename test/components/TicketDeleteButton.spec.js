import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { wrapProvider } from '../utilities';
import Container, {
  TicketDeleteButton,
} from 'components/tickets/TicketDeleteButton';
import { DeleteButton } from 'components';

describe('TicketDeleteButton Component', () => {
  it('renders', () => {
    const Enhanced = wrapProvider()(Container);
    const wrapper = mount(<Enhanced ticket={{}} />);

    const container = wrapper.find(Container);
    const component = wrapper.find(TicketDeleteButton);

    expect(container.exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it('calls the delete ticket action', () => {
    const ticket = { key: 'TICKET-TEST' };
    const callback = sinon.spy();
    const wrapper = mount(
      <TicketDeleteButton ticket={ticket} deleteTicket={callback} />,
    );

    wrapper.find(DeleteButton).simulate('click');
    expect(callback.called).toBe(true);
    expect(callback.calledWith(ticket.key)).toBe(true);
  });
});
