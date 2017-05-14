import React from 'react';
import { shallow } from 'enzyme';
import { CardTitle, CardText } from 'reactstrap';
import {
  TicketCard,
  ErrorCard,
  NotFoundCard,
  LinkButton,
  TicketDeleteButton,
  UserLink,
} from 'components';

describe('TicketCard Component', () => {
  const setup = propOverrides => {
    const props = Object.assign(
      {
        children: null,
      },
      propOverrides,
    );

    const wrapper = shallow(<TicketCard {...props} />);

    return {
      props,
      wrapper,
      title: wrapper.find(CardTitle),
      error: wrapper.find(ErrorCard),
      notFound: wrapper.find(NotFoundCard),
      text: wrapper.find(CardText),
      userLink: wrapper.find(UserLink),
    };
  };

  it('renders', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a loading message when loading', () => {
    const { wrapper } = setup({ loading: true });

    expect(wrapper.find('h1').text()).toContain('Loading...');
  });

  it('renders ErrorCard when error exists', () => {
    const { error } = setup({ error: 'Error' });

    expect(error.exists()).toBe(true);
  });

  it('renders NotFoundCard when no ticket found', () => {
    const { notFound } = setup();

    expect(notFound.exists()).toBe(true);
  });

  describe('when provided a ticket', () => {
    const ticket = {
      key: 'TICKET-1',
      summary: 'Ticket Summary',
      description: 'Ticket Description',
    };

    it("render's ticket's information", () => {
      const { wrapper, title, text } = setup({ ticket });

      expect(title.shallow().text()).toContain('TICKET-1');
      expect(text.first().shallow().text()).toContain(
        'Summary: Ticket Summary',
      );
      expect(text.last().shallow().text()).toContain(
        'Description: Ticket Description',
      );
    });

    it('renders ticket edit link', () => {
      const { wrapper } = setup({ ticket });
      const button = wrapper.find(LinkButton);

      expect(button.prop('to')).toEqual('/tickets/TICKET-1/edit');
    });

    it('renders ticket delete link', () => {
      const { wrapper } = setup({ ticket });
      const button = wrapper.find(TicketDeleteButton);

      expect(button.prop('ticket')).toEqual(ticket);
    });

    it('renders ticket reporter link', () => {
      const ticket = {
        reporter: {
          username: 'user0',
        },
      };

      const { userLink } = setup({ ticket });

      expect(userLink.prop('user')).toEqual(ticket.reporter);
      expect(userLink.prop('children')).toEqual(ticket.reporter.username);
    });

    it('renders ticket assignee link', () => {
      const ticket = {
        assignee: {
          username: 'user0',
        },
      };

      const { userLink } = setup({ ticket });

      expect(userLink.prop('user')).toEqual(ticket.assignee);
      expect(userLink.prop('children')).toEqual(ticket.assignee.username);
    });
  });
});
